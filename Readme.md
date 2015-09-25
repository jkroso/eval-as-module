# eval-as-module

Eval a JS string as if it was a file being required

## Installation

```sh
npm install eval-as-module
```

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

And like `eval` it also gives you access to the value of the last statement executed in the script.

```js
run('1;2;3').return // => 3
```
