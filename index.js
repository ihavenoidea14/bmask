const bitmask = require('./src/bitmask');
const statusbits = require('./src/maskmap');

const b = new bitmask(statusbits);

let res = b.describeMask(640);
console.log(res);