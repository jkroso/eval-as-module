
var dirname = require('path').dirname
var Module = require('module')
var json = JSON.stringify

/**
 * run `js` as if it were a module at `path`
 *
 * @param {String} js
 * @param {String} path
 * @api private
 */

function run(js, path) {
  var m = new Module(path, module)
  m.paths = Module._nodeModulePaths(dirname(path))
  m.filename = path
  js = 'module.return=eval(' + json(js) + ')'
  m._compile(js, path)
  return m
}

module.exports = run
