var assert = require('better-assert');
var run = require('..');
var path = require('path');

it('should have a useful `require`', function(){
  var m = run('module.exports = require("..")', __filename);
  assert(m.exports == run);
});

it('should run in this context', function(){
  var m = run('module.exports = function(){}', __filename);
  assert(m.exports instanceof Function);
});

it('should be able to run external requires', function (){
  var context = path.resolve(__dirname, '../foo.js');
  var m = run('var an = require(\'./test/fixtures/another\');module.exports = function (a) { return an(a + 1) };', context);
  var val = m.exports(2);
  assert(val == 6);
});

it('should be able to run external requires with fake path', function (){
  var context = path.resolve(__dirname, './bar/foo.js');
  var m = run('var an = require(\'../fixtures/another\');module.exports = function (a) { return an(a + 1) };', context);
  var val = m.exports(3);
  assert(val == 8);
});

it('should provide access to the return value', function(){
  var m = run('1;2;3');
  assert(m.return == 3);
});
