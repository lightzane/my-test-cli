import path from 'path';

export const JSON_NAME_RETEST = 'retest.json';
export const JSON_PATH_RETEST = path.join(
  process.cwd(),
  '.cache',
  JSON_NAME_RETEST
);
