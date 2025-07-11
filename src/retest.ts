#!/usr/bin/env node

import 'colors';
import path from 'path';
import prompts from 'prompts';

import { JSON_PATH_RETEST } from './constant';
import { addGitignore, printJestVersionWithExit, processAll, processEach } from './utils';

export function retest() {
  let response: prompts.Answers<'files'> & { all: boolean } = null!;

  try {
    response = require(JSON_PATH_RETEST);
  } catch (error) {
    // no files
  }

  if (!response || !response.files || response.files.length === 0) {
    console.log(`No recent tests found. Please run tests first.`.red);
    return;
  }

  console.clear();
  printJestVersionWithExit();

  addGitignore('.cache')

  const star = `\n* `.yellow;

  if (response.all) {
    console.log(`\n 🧪 `, ` Running all tests... `.bgGreen.black.bold);
    processAll();
  } else {
    const files = response.files.map((f: string) => path.basename(f));
    console.log(`\n 🧪 `, ` Running previous tests... `.bgGreen.black.bold);
    console.log(star + `${files.join(star)}\n`);
    processEach(response);
  }
}

retest();
