import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Define the path to the saved JSON file
    const filePath = join(process.cwd(), 'public', 'assets', 'js', 'localData.json');

    // Read file content
    const data = await readFile(filePath, 'utf-8');

    // Parse and return the JSON content
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    // console.error('Error reading JSON file:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}
