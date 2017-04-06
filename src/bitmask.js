import Long from 'long';

/**
 * Takes bitmask, map, optional column name (default=status), optional onOffState (default=state), returns object array 
 * 
 * @param {Number} mask 
 * @param {Map} map 
 * @param {String} [column=status]
 * @param {String} [state=state]
 * @returns {Array} column, state
 */

export function decodeMaskVerbose(mask, bitmap, column = 'status', onOffState = 'state') {
  let statuses = [];
  bitmap.forEach((v, k) => {
    if (new Long.fromNumber(v).and(new Long.fromNumber(mask)).toNumber()) {
      let row = {};
      row[column] = k, row[onOffState] = true;
      statuses.push(row);
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

export function decodeMask(mask, bitmap) {
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
 * @param {Array} obj
 * @param {Map} bitmap
 * @param {String} [column=status]
 * @param {String} [state=state]
 * @returns {Number}
 */

export function encodeMask(arr, bitmap, column = 'status', onOffState = 'state') {
  return arr.filter((v) => v[onOffState] == true).map((v) => bitmap.get(v[column])).reduce((a, v) => a + v, 0);   
}
