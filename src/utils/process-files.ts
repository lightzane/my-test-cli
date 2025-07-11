import path from 'path';
import prompts from 'prompts';

import { cli, getJestConfigPath } from '.';

export function processAll() {
  let command = `npx jest -c "${getJestConfigPath()}"`;

  console.log('Running command:', command);

  cli(command.trim());
}

export function processEach(response: prompts.Answers<'files'>) {
  let command = 'npx jest ';

  response.files.forEach((file: string) => {
    command += `"${file}" `;
  });

  command += `-c "${getJestConfigPath()}" `;

  command += '-t ".*" ';

  response.files.forEach((file: string) => {
    const baseFilename = path.basename(file).replace('.spec', '');
    command += `--collectCoverageFrom "**/${baseFilename}" `;
  });

  console.log('Running command:', command);

  cli(command.trim());
}
