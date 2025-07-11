#!/usr/bin/env node

import 'colors';
import path from 'path';
import prompts from 'prompts';

import { JSON_PATH_RETEST } from './constant';
import {
  addGitignore,
  createJsonFile,
  getFiles,
  printJestVersionWithExit,
  processAll,
  processEach,
} from './utils';

async function main() {
  // Get the args from the command line
  const args = process.argv.slice(2);
  const argsString = args.join(',');
  const pattern =
    args.length > 1
      ? `*{${argsString}}`
      : args.length === 1
      ? `*${argsString}`
      : '';

  // List all files in the current directory with given glob pattern
  const files = getFiles(pattern)
    // Replace '\' with '/' for cross-platform compatibility
    .map((file) => file.replace(/\\/g, '/'))
    // Sort files by name
    .sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.clear();

  const response = await prompts({
    type: 'multiselect',
    name: 'files',
    message: 'Select files to process',
    choices: files.map((file) => ({
      title: path.basename(file),
      value: file,
    })),
  });

  if (!response.files || response.files.length === 0) {
    process.exit(0);
  }

  printJestVersionWithExit();

  /** All tests */
  const all = args.length === 0 && response.files?.length === files.length;

  // For caching previous tests
  createJsonFile(JSON_PATH_RETEST, { all, files: response.files });

  // Add .cache to .gitignore
  addGitignore('.cache');

  // * Process all files using `npx jest` command
  if (response.files && response.files.length > 0) {
    if (all) {
      processAll();
    } else {
      processEach(response);
    }
  }
}

main();
