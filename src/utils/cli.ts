import { execSync } from 'child_process';

export function cli(command: string) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: 'inherit' });
  } catch (error: any) {
    // console.error(error.stderr)
    process.exit(error.status ?? 1);
  }
}
