# react-lib-starterkit
My personal starterkit for React libraries

Technology stack:
| Transpiler | Babel  |
| Bundler | Rollup |
| Libraries | React |
| Testing | Karma, Mocha, Chai, Enzyme |
| Linter | ESLint |
| Hooks | Husky |
| Code style | AirBnB |

*Choice of bundler: Why not Webpack?*
I prefer rollup for libraries, because the shared scope across files resembles more of what the code what look like if I were to write the library by hand. It also saves bytes and we all know every byte counts.
I prefer Webpack for apps, because Webpacks allows more or and more precise optimizations in single-page apps.
