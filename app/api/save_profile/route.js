import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    // Parse form data
    const formData = await request.formData();

    // Final object to store
    const savedData = {};

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'object' && value.name && typeof value.arrayBuffer === 'function') {
        // It's a file
        const arrayBuffer = await value.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let fileName = '';

        if (key === 'light') {
          fileName = 'light.png';
          savedData['imageLight'] = `/uploads/${fileName}`;
        } else if (key === 'dark') {
          fileName = 'dark.png';
          savedData['imageDark'] = `/uploads/${fileName}`;
        } else {
          // Skip other files (or handle if needed)
          continue;
        }

        const filePath = join(uploadDir, fileName);
        await writeFile(filePath, buffer);
      } else {
        // It's a text field, always store as array
        if (!savedData[key]) {
          savedData[key] = [];
        }
        savedData[key].push(value);
      }
    }

    savedData.createdAt = new Date().toISOString();

    const dataDir = join(process.cwd(), 'public', 'assets', 'js');
    await mkdir(dataDir, { recursive: true });

    const filePath = join(dataDir, 'localData.json');
    await writeFile(filePath, JSON.stringify(savedData, null, 2));

    return NextResponse.json({ message: 'Data saved successfully!', data: savedData });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}