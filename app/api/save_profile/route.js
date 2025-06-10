import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { Readable } from 'stream';

function toNodeRequest(request) {
  const readable = new Readable({
    read() {
      const reader = request.body.getReader();
      const pump = () =>
        reader.read().then(({ done, value }) => {
          if (done) return this.push(null);
          this.push(value);
          return pump();
        });
      pump();
    },
  });

  // Copy headers to be compatible with formidable
  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  readable.headers = headers;
  readable.method = request.method;
  readable.url = request.url;

  return readable;
}

// Helper to get just the file name
function getFileName(filepath) {
  return filepath.split(/[/\\]/).pop(); // Handles both Windows and Unix paths
}

export async function POST(request) {
  try {
    // Ensure upload directory exists
    await mkdir(join(process.cwd(), 'public', 'uploads'), { recursive: true });

    const nodeReq = toNodeRequest(request);

    const form = formidable({
      multiples: true,
      uploadDir: './public/uploads',
      keepExtensions: true,
      filename: (name, ext, part) => {
        return `${part.name}${ext}`; // part.name will be 'light' or 'dark'
      },
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const dataDir = join(process.cwd(), 'public', 'assets', 'js');
    await mkdir(dataDir, { recursive: true });

    const savedData = {
      ...fields,
      imageLight: files.light
        ? Array.isArray(files.light)
          ? `/uploads/${getFileName(files.light[0].filepath)}`
          : `/uploads/${getFileName(files.light.filepath)}`
        : null,
      imageDark: files.dark
        ? Array.isArray(files.dark)
          ? `/uploads/${getFileName(files.dark[0].filepath)}`
          : `/uploads/${getFileName(files.dark.filepath)}`
        : null,
      createdAt: new Date().toISOString(),
    };

    const filePath = join(dataDir, 'localData.json');
    await writeFile(filePath, JSON.stringify(savedData, null, 2));

    return NextResponse.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}