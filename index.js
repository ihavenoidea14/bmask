var bitmask = require('./bitmask');
var bitmap = require('./maskmap');

//bitmask.encodeMask([1, 1, 1, 1, 1, 1]);
// returns 63

console.log(bitmask.decodeMask(40, bitmap));
// returns ["BitFlagLead"];
//console.log(bitmask.encodeMask([{'status': 'BitFlagNotAssigned', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagCreditOnly', 'state': true}], bitmap));

//console.log(bitmask.encodeMask(bitmask.decodeMask(40, bitmap), bitmap));
//console.log(bitmask.encodeMask([{'status': 'BitFlagNotAssigned', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagCreditOnly', 'state': true}], bitmap));