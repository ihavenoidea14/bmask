var Long = require('long');

/**
 * Takes bitmask and map, returns object array 
 * 
 * @param {Number} mask 
 * @param {Map} map 
 * @returns {Array} status, state
 */

exports.decodeMaskVerbose = function(mask, bitmap) {
  let statuses = [];
  bitmap.forEach((v, k) => {
    if (new Long.fromNumber(v).and(new Long.fromNumber(mask)).toNumber()) {
      statuses.push({'status': k, 'state': true});
    }
  });
  return statuses;
}


/**
 * Takes bitmask and map, returns array
 * 
 * @param {Number} mask 
 * @param {Map} bitmap 
 * @returns {Array} status
 */

exports.decodeMask = function(mask, bitmap) {
  let statuses = [];
  bitmap.forEach((v, k) => {
    if (new Long.fromNumber(v).and(new Long.fromNumber(mask)).toNumber()) {
      statuses.push(k);
    }
  });
  return statuses;
}


/**
 *  Accepts object array with status name and its state, e.g. [{ 'status': 'SomeCoolStatus', 'state': true }]
 * 
 * @param {Object} obj
 * @param {Map} bitmap
 * @returns {Number}
 */

exports.encodeMask = function(obj, bitmap) {
    return obj.filter(({state}) => state == true).map(({status}) => bitmap.get(status)).reduce((a, v) => a + v, 0);   
}
