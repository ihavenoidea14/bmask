import test from 'ava';
import {decodeMask, encodeMask} from '../bitmask';
import statusbits from '../maskmap';

test('encode mask returns a decimal mask from a bit array', t => {
    t.is(3, encodeMask([1, 1]));
});

test('decode mask decodes a mask, given a map of bits', t => {
    const val = decodeMask(3, statusbits);
    t.is("BitFlagNotAssigned", val[0]);
});
