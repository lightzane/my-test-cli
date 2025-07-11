import 'colors';
import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';

export function getFiles(pattern = ''): string[] {
  pattern = `**/${pattern}*spec.{ts,js}`;

  console.log(`Searching for files with pattern: ${pattern.yellow}`);

  return globSync(pattern, {
    cwd: process.cwd(),
    nodir: true,
    absolute: true,
    ignore: ['node_modules/**', 'dist/**', 'build/**', 'bin/**'],
  });
}

export function getJestConfigPath(): string {
  const defaultConfig = path.join(
    __dirname,
    '..', // bin
    '..', // utils
    'jest.config.js'
  );

  let jestConfig = globSync('jest.config.{js,ts}', {
    cwd: process.cwd(),
    nodir: true,
    absolute: true,
    ignore: ['node_modules/**', 'dist/**', 'build/**', 'bin/**'],
  })[0];

  if (!jestConfig) {
    const dest = path.join(process.cwd(), 'jest.config.js');
    console.log(
      `No Jest config found in the current directory. Copying default config at ${defaultConfig.yellow} to ${dest.yellow}`
    );
    fs.copyFileSync(defaultConfig, dest);
    jestConfig = dest;
  }

  return jestConfig;
}
