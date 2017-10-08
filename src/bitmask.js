const Long = require('long');
const { curry, map, filter } = require('ramda');

const bitmask = function(stateMap) {
  this.stateMap = stateMap;
  this._keys = Object.keys(this.stateMap);
  this._bittotal = this._keys.reduce((a, b) => a + this.stateMap[b], 0)
}

bitmask.prototype._describeMaskHelper = function(mask, key) {
  return {
    element: key,
    state: Boolean(this._bitwiseAnd(mask, key) && this._lessThan(mask, key))
  }
}

bitmask.prototype.describeMask = function(mask) {
  return map(this._describeMaskHelper.bind(this, mask), this._keys);
}

bitmask.prototype.encodeMask = function(arr) {
  return arr.map(v => this.stateMap[v]).reduce((a, v) => a + v, 0);
}

bitmask.prototype._lessThan = curry(function(mask, key) {
  return this.stateMap[key] <= mask;
})

bitmask.prototype._bitwiseAnd = curry(function(mask, key) {
  return new Long.fromNumber(this.stateMap[key]).and(new Long.fromNumber(mask)).toNumber();
})

bitmask.prototype._notBitwiseAnd = curry(function(mask, key) {
  return !this._bitwiseAnd(mask, key);
})

bitmask.prototype.bitsInMask = function(mask) {
  return filter(this._bitwiseAnd(mask).bind(this), filter(this._lessThan(mask).bind(this), this._keys));
}

bitmask.prototype.bitsNotInMask = function(mask) {
  return filter(this._notBitwiseAnd(mask).bind(this), this._keys);
}

module.exports = bitmask;