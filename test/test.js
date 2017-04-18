import test from 'ava';
import {decodeMask, decodeMaskVerbose, encodeMask} from '../src/bitmask';
import statusbits from '../src/maskmap';

test('encode mask returns a decimal mask from a bit array', t => {
    t.is(40, encodeMask([{'status': 'BitFlagInProcessing', 'state': true}, {'status': 'BitFlagPrequal', 'state': false}, {'status': 'BitFlagApproved', 'state': true}], statusbits));
});

test('encode should not throw an error when an empty array is passed', t => {
    t.notThrows(() => {
        encodeMask([], statusbits)
    });
});

test('encode should return 0 when an empty array is passed', t => {
    t.is(0, encodeMask([], statusbits));
});

test('decode mask (verbose) decodes a mask into object array, given a map of bits', t => {
    t.deepEqual([{'status':'BitFlagInProcessing', 'state': true}, {'status': 'BitFlagApproved', 'state': true}], decodeMaskVerbose(40, statusbits));
});

test('decode mask (verbose) should have no elements with a \'false\' property', t=> {
    t.is(true, !decodeMaskVerbose(40,statusbits).some(e => e.status == false));
});

test('decode mask should return a bitmask, given a map of bits', t => {
    t.deepEqual(['BitFlagDeclined', 'BitFlagClosed'], decodeMask(640, statusbits));
});

test('combining the two methods should return original value', t=> {
    t.is(40, encodeMask(decodeMaskVerbose(40, statusbits),statusbits));
});