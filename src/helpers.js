// From: http://codepen.io/bungu/pen/rawvJe

/**
 * Generates vertices for asteroid polygon with certain count and radius
 * @param  {Number} count   Number of vertices
 * @param  {Number} rad     Maximal radius of polygon
 * @return {Array}        Array of vertices: {x: Number, y: Number}
 */
export function asteroidVertices(count, rad) {
  let p = [];
  for (let i = 0; i < count; i++) {
    p[i] = {
      x: (-Math.sin((360/count)*i*Math.PI/180) + 1/3)*rad,
      y: (-Math.cos((360/count)*i*Math.PI/180) +1/3)*rad
    };
  }
  return p;
};

/**
 * Rotate point around center on certain angle
 * @param {Object} p        {x: Number, y: Number}
 * @param {Object} center   {x: Number, y: Number}
 * @param {Number} angle    Angle in radians
 */
export function rotatePoint(p, center, angle) {
  return {
    x: ((p.x-center.x)*Math.cos(angle) - (p.y-center.y)*Math.sin(angle)) + center.x,
    y: ((p.x-center.x)*Math.sin(angle) + (p.y-center.y)*Math.cos(angle)) + center.y
  };
};

/**
 * Random Number between 2 numbers
 */
export function randomNumBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
};

/**
 * Random Number between 2 numbers excluding a certain range
 */
export function randomNumBetweenExcluding(min, max, exMin, exMax) {
  let random = randomNumBetween(min, max);
  while (random > exMin && random < exMax) {
    random = Math.random() * (max - min + 1) + min;
  }
  return random;
};


//Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}