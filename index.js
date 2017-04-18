import { decodeMaskVerbose, decodeMask, encodeMask } from './src/bitmask';
import statusbits from './src/maskmap';

console.log(decodeMaskVerbose(56, statusbits));
console.log(encodeMask([{'status': 'BitFlagNotAssigned', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagCreditOnly', 'state': true}], statusbits));
console.log(encodeMask([{'status': 'BitFlagInProcessing', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagApproved', 'state': true}], statusbits));