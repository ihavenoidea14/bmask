var bitmask = require('./bitmask');
var bitmap = require('./maskmap');

bitmask.encodeMask([1, 1, 1, 1, 1, 1]);
// returns 63

bitmask.decodeMask(2048, bitmap);
// returns ["BitFlagLead"];
