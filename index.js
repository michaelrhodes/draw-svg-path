var abs = require('abs-svg-path')
var parse = require('parse-svg-path')
var curvify = require('curvify-svg-path')

var methods = { C: 'bezierCurveTo', M: 'moveTo' }

module.exports = draw

function draw (ctx, path) {
  var seg, cmd, i = 0
  var segments = curvify(abs(
    typeof path == 'string' ?
      parse(path) :
      path
  ))

  while (seg = segments[i++]) {
    cmd = ctx[methods[seg[0]]]
    cmd && cmd.apply(ctx, seg.slice(1))
  }
}
