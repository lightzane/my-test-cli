import { execSync } from 'child_process';
import 'colors';

export function printJestVersionWithExit() {
  const jestVersion = 'npx jest --version';
  // console.log(`Jest version: ${cli(jestVersion).trim()}`); // ! this returns null

  try {
    console.log(
      `\nJest version: ${execSync(jestVersion, { encoding: 'utf-8' }).yellow}`
    );
  } catch (error: any) {
    console.error(`Error getting Jest version: ${error.message.red}`);
    process.exit(1);
  }
}
