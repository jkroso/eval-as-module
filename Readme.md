
# eval-as-module

  Eval a JS string as if it was a file being required

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add eval-as-module`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install eval-as-module`

then in your app:

```js
var run = require('eval-as-module')
```

## API

### run(str, path)

Runs `str` as if it were a module at `path` and returns the module object

```js
run('module.exports = require("eval-as-module")', __filename).exports // => run
```
