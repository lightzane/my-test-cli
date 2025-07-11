import path from 'path';
import fs from 'fs';

export function createJsonFile(fileName: string, data: object): void {
  // Ensure the directory exists
  const dir = path.dirname(fileName);

  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (err) {
    // Directory may already exist, ignore error
  }

  // Write the JSON data to the file
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2), {
    encoding: 'utf-8',
  });
}
