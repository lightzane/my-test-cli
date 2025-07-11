# What is My Test CLI?

A global node package which you can use to
quickly select or pick files for unit testing and coverage.

This uses your internal **Jest** within the current working directory where you run the command in your CLI.

::: warning ⚠️ Warning
This is not published in the **npm registry** and is **not** an official node package.
:::

## Use Cases

- 🧪 Unit testing and coverage

<div class="tip custom-block" style="padding-top: 8px">
Execute <code>test</code> command in your working directory 
and it will scan all <code>.spec</code> files to include in selection
to run in <strong>Jest</strong> unit testing
</div>

```bash
? Select files to process »
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
(*)   another.spec.ts
( )   example.spec.ts
( )   sample.spec.ts
```

### Result

```bash

√ Select files to process » another.spec.ts

Jest version: 30.0.3

Running command: npx jest "C:/Users/path/to/another.spec.ts" -c "C:\Users\path\to\jest.config.js" -t ".*" --collectCoverageFrom "**/another.ts"
 PASS  examples/another.spec.ts
  Another Spec
    √ should run another test (2 ms)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |     100 |      100 |     100 |     100 |
 another.ts |     100 |      100 |     100 |     100 |
------------|---------|----------|---------|---------|-------------------
```

<div class="tip custom-block" style="padding-top: 8px">
💡 Quickly focus and display only the coverage of the tests you picked
</div>
