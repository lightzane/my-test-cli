---
outline: deep
---

# Getting Started

[[toc]]

## Installation

<!-- For "TGZ PATH" See config.mts markdownConfig() -->

[![Download .tgz](https://img.shields.io/badge/Download-.tgz-blue?style=flat)](TGZ_PATH)

👆 Download the [TGZ_FULLNAME](TGZ_PATH)
then open your CLI on the same directory it was downloaded
and run the following command:

```bash
npm install -g TGZ_FULLNAME
```

To uninstall, run the command `npm uninstall -g my-test-cli`

## Usage

After installation, the following commands will be available globally in `cli`:

- [`test`](#test)
- [`test <...names>`](#test-names)
- [`retest`](#retest)

### `test`

Go inside your node project directory that contains `Jest`
and other `.spec.ts` files and run the following command

```bash
test
```

```bash
# Result

? Select files to process »
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
( )   another.spec.ts
( )   example.spec.ts
( )   sample.spec.ts
```

### `test <...names>`

```bash
test other sample
```

This will use the **other** and **sample** as `glob` pattern
to search for related `.spec` files to be listed
and reduce the number of selections to quickly select items

```bash
# Result

? Select files to process »
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
( )   another.spec.ts
( )   sample.spec.ts
```

### `retest`

Run previous tests that were selected via the previous `test` command

```bash
retest
```

After you run the previous commands, it will create a **JSON** file
within the `.cache` directory and as well as automatically
updating your `.gitignore` file to exclude that directory

::: info 📒 Note
If `jest.config.js` is not existing within the current working directory,
then a Jest configuration file will be created for you.
:::
