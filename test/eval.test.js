
var assert = require('better-assert')
var run = require('..')

it('should have a useful `require`', function(){
  var m = run('module.exports = require("..")', __filename)
  assert(m.exports == run)
})

it('should run in this context', function(){
  var m = run('module.exports = function(){}', __filename)
  assert(m.exports instanceof Function)
})
