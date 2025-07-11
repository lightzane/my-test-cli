import 'colors';
import fs from 'fs';
import path from 'path';

export function addGitignore(name: string) {
  // Check if .gitignore exists
  const gitignorePath = path.join(process.cwd(), '.gitignore');

  if (!fs.existsSync(gitignorePath)) {
    // Create .gitignore if it doesn't exist
    fs.writeFileSync(gitignorePath, '', 'utf8');
  }

  // Check if ${name} directory is already in .gitignore
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');

  if (!gitignoreContent.includes(name)) {
    // Append ${name} to .gitignore
    fs.appendFileSync(
      gitignorePath,
      `\n# Added by test-retest\n${name}\n`,
      'utf8'
    );
    console.log(`${name} added to .gitignore`.cyan);
  }
}
