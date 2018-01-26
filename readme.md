# draw-svg-path
draw svg paths onto canvas contexts

## install
```sh
$ npm install michaelrhodes/draw-svg-path#2.0.1
```

## use
``` js
var draw = require('draw-svg-path')
var parse = require('parse-svg-path')

var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineWidth = 1
ctx.strokeStyle = '#000000'
ctx.fillStyle = 'transparent'

// Accepts /^(un)?parsed$/ paths
draw(ctx, parse('M20 20 L25 25'))
draw(ctx, 'M10 10 L15 15')

ctx.stroke()
ctx.closePath()

document.body.appendChild(canvas)
```

## obey
[MIT](http://opensource.org/licenses/MIT)
