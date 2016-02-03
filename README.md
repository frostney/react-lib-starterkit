# react-lib-starterkit
This provides the starting point for creating re-usable libraries/components for React.

### Technology stack:
- Transpiler: Babel
- Bundler: Rollup (with `rollup-babel-lib-bundler`)
- Libraries: React
- Testing: Karma, Mocha, Chai, Enzyme
- Linter: ESLint
- Commit Hooks: Husky
- Code style: AirBnB

### Folder structure
```
dist - Distribution files for the component
test - Tests for the component
src - The source of the component
```

`dist` files are not under version control, they are being generated on `npm install` and `npm publish` through the `prepublish` hook. If you need the library to be available in a browser environment, use NPMCDN instead of linking directly to Github.

### Commands
```
npm run build - Builds distribution
npm run lint - Lints all files
npm test - Lints and run tests
```

### Choice of bundler: Why not Webpack?
I prefer rollup for libraries, because the shared scope across files resembles more of what the code what look like if I were to write the library by hand. It also saves bytes and we all know every byte counts.
I prefer Webpack for apps, because Webpacks allows more or and more precise optimizations in single-page apps.

### License
MIT
