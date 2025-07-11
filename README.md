# My Test CLI

A global node package which you can use to
quickly select & pick files for unit testing and coverage.

This uses your internal **Jest** within the local directory where you run the command.

[See Documentation](https://lightzane.github.io/my-test-cli)

## Developer notes

### Getting Started

```bash
# pnpm
npm install -g pnpm@latest-10
pnpm install
npm start

# npm
npm install
npm start
```

Reference: https://pnpm.io/installation#using-npm

### Development

```bash
npm start

# with arguments
npm start -- other sample # equivalent to: `test other sample`
```

### Package

For testing and distribution purposes:

```bash
npm run package
```

<!-- prettier-ignore -->
> [!WARNING]
> Once development is done, update the version in [package.json](./package.json)
> then run `npm run package` to generate a new `.tgz` file
> and delete the old one. Also update [CHANGELOG.md](./CHANGELOG.md) and other documentations.

### Documentation

```bash
npm run docs:dev
```

### TODO

- TODO: think of a name (review: `my-test-cli`)
- TODO: add `yargs` to easily access flags (i.e. `--version`)
