var Long = require('long');

/**
 * Takes bitmask and map, returns array 
 * 
 * @param {any} mask 
 * @param {any} map 
 * @returns {Array}
 */

exports.decodeMask = function(mask, map) {
  let statuses = [];
  map.forEach((v, k) => {
    if (new Long.fromNumber(k).and(new Long.fromNumber(mask)).toNumber()) {
      statuses.push(v);
    }
  });
  return statuses;
}

/**
 * Takes an array and returns encoded bitmask
 * 
 * @param {any} vals 
 * @returns {Number} bitmask
 */

exports.encodeMask = function(vals) {
  return parseInt(vals.map(v => v | 0).join(''), 2);
}
