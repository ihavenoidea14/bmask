import { decodeMaskVerbose, decodeMask, encodeMask } from './lib/bitmask';
import statusbits from './lib/maskmap';

console.log(decodeMask(40, statusbits));
// console.log(encodeMask([{'status': 'BitFlagNotAssigned', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagCreditOnly', 'state': true}], statusbits));
// console.log(decodeMaskVerbose(40, statusbits));