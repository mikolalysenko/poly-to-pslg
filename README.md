poly-to-pslg
============
Converts a polygon into a planar straight line graph.

# Example

```javascript
var poly2pslg = require('poly-to-pslg')

var polygon = [
  [[-2, 2], [2, 2], [2, -2], [-2,-2]],
  [[-1, 1], [1, 1], [1, -1], [-1,-1]]
]

var pslg = poly2pslg(polygon)

console.log(pslg)
```

#### Output

# Install

```
npm i poly-to-pslg
```

# API

#### `var graph = require('poly-to-pslg')(loops[, options])`
Converts a polygon into a planar straight line graph.

* `loops` is an array of loops determining the vertices of the polygon.  If only one loop is specified, this is inferred automatically.
* `options` is an object storing some optional parameters
    + `options.clean` if this flag is set to true, then clean up the resulting graph using `clean-pslg`.  (Default `true`)
    + `options.nested` if this flag is set to true, then assume the polygon is an array of loops.  If `false`, then suppose that the polygon is just one array.

**Returns** An object with two properties

* `points` are the vertex coordinate of the pslg
* `edges` are the edges of the pslg

# License
(c) 2015 Mikola Lysenko. MIT License
