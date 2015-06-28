var poly2pslg = require('../poly-to-pslg')

var polygon = [
  [[-2, 2], [2, 2], [2, -2], [-2,-2]],
  [[-1, 1], [1, 1], [1, -1], [-1,-1]]
]

var pslg = poly2pslg(polygon)

console.log(pslg)
