const test = require('ava');
const bitmask = require('../src/bitmask');
const statusbits = require('../src/maskmap');
const b = new bitmask(statusbits);

test('encode mask returns a decimal mask from a bit array', t => {
    t.is(42, b.encodeMask(['BitFlagInProcessing', 'BitFlagPrequal', 'BitFlagApproved']));
});

test('encode should return 0 when an empty array is passed', t => {
    t.is(0, b.encodeMask([]));
});

test('bitsInMask should return the elements present in a mask', t => {
    t.deepEqual(['BitFlagDeclined', 'BitFlagClosed'], b.bitsInMask(640));
});

test('bitsInMask should return an empty array when nothing is passed in', t => {
    t.deepEqual([], b.bitsInMask());
});

test('describeMask should describe the mask', t => {
    let res = [
        { element: 'BitFlagNotAssigned', state: false },
        { element: 'BitFlagPrequal', state: false },
        { element: 'BitFlagCreditOnly', state: false },
        { element: 'BitFlagInProcessing', state: false },
        { element: 'BitFlagSubmitted', state: false },
        { element: 'BitFlagApproved', state: false },
        { element: 'BitFlagResubmitted', state: false },
        { element: 'BitFlagDeclined', state: true },
        { element: 'BitFlagInClosing', state: false },
        { element: 'BitFlagClosed', state: true },
        { element: 'BitFlagCanceled', state: false },
        { element: 'BitFlagLead', state: false },
        { element: 'BitFlagSuspended', state: false },
        { element: 'BitFlagDocsSigned', state: false },
        { element: 'BitFlagFunded', state: false },
        { element: 'BitFlagPurchased', state: false },
        { element: 'BitFlagCustomStatus1', state: false },
        { element: 'BitFlagCustomStatus2', state: false },
        { element: 'BitFlagCustomStatus4', state: false },
        { element: 'BitFlagClearToClose', state: false },
        { element: 'BitFlagDocsSent', state: false },
        { element: 'BitFlagCollateralSent', state: false },
        { element: 'BitFlagShipped', state: false },
        { element: 'BitFlagCustomStatus7', state: false },
        { element: 'BitFlagCustomStatus8', state: false },
        { element: 'BitFlagCustomStatus9', state: false },
        { element: 'BitFlagCustomStatus10', state: false },
        { element: 'BitFlagCustomStatus11', state: false }
    ]
    t.deepEqual(res, b.describeMask(640));
});

test('bitsNotInMask should return all elements not present in the mask', t => {
    let res = [
        'BitFlagNotAssigned',
        'BitFlagPrequal',
        'BitFlagCreditOnly',
        'BitFlagInProcessing',
        'BitFlagSubmitted',
        'BitFlagApproved',
        'BitFlagResubmitted',
        'BitFlagInClosing',
        'BitFlagCanceled',
        'BitFlagLead',
        'BitFlagSuspended',
        'BitFlagDocsSigned',
        'BitFlagFunded',
        'BitFlagPurchased',
        'BitFlagCustomStatus1',
        'BitFlagCustomStatus2',
        'BitFlagCustomStatus4',
        'BitFlagClearToClose',
        'BitFlagDocsSent',
        'BitFlagCollateralSent',
        'BitFlagShipped',
        'BitFlagCustomStatus7',
        'BitFlagCustomStatus8',
        'BitFlagCustomStatus9',
        'BitFlagCustomStatus10',
        'BitFlagCustomStatus11'
    ]
    t.deepEqual(res, b.bitsNotInMask(640));
});