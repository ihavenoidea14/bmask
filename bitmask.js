var Long = require('long');

/*
* Map of all Byte status masks
*/

let statusbits = new Map();
statusbits.set(1, "BitFlagNotAssigned");
statusbits.set(2, "BitFlagPrequal");
statusbits.set(4, "BitFlagCreditOnly");
statusbits.set(8, "BitFlagInProcessing");
statusbits.set(16, "BitFlagSubmitted");
statusbits.set(32, "BitFlagApproved");
statusbits.set(64, "BitFlagResubmitted");
statusbits.set(128, "BitFlagDeclined");
statusbits.set(256 ,"BitFlagInClosing");
statusbits.set(512, "BitFlagClosed");
statusbits.set(1024, "BitFlagCanceled");
statusbits.set(2048, "BitFlagLead");
statusbits.set(4096, "BitFlagSuspended");
statusbits.set(8192, "BitFlagDocsSigned");
statusbits.set(16384, "BitFlagFunded");
statusbits.set(32768, "BitFlagPurchased");
statusbits.set(65536, "BitFlagCustomStatus1");
statusbits.set(131072, "BitFlagCustomStatus2");
// statusbits.set(262144, "BitFlagCustomStatus3");
statusbits.set(524288, "BitFlagCustomStatus4");
// statusbits.set(1048576, "BitFlagCustomStatus5");
// statusbits.set(2097152, "BitFlagCustomStatus6");
statusbits.set(4194304, "BitFlagClearToClose");
statusbits.set(8388608, "BitFlagDocsSent");
statusbits.set(16777216, "BitFlagCollateralSent");
statusbits.set(33554432, "BitFlagShipped");
statusbits.set(67108864, "BitFlagCustomStatus7");
statusbits.set(134217728, "BitFlagCustomStatus8");
statusbits.set(268435456, "BitFlagCustomStatus9");
statusbits.set(536870912, "BitFlagCustomStatus10");
statusbits.set(1073741824, "BitFlagCustomStatus11");
// statusbits.set(2147483648, "BitFlagCustomStatus12");
// statusbits.set(4294967296, "BitFlagCustomStatus13");
// statusbits.set(8589934592, "BitFlagCustomStatus3");
// statusbits.set(17179869184, "BitFlagCustomStatus3");
// statusbits.set(34359738368, "BitFlagCustomStatus3");
// statusbits.set(68719476736, "BitFlagCustomStatus3");
// statusbits.set(137438953472, "BitFlagCustomStatus3");
// statusbits.set(274877906944, "BitFlagCustomStatus3");
// statusbits.set(549755813888, "BitFlagCustomStatus3");
// statusbits.set(1099511627776, "BitFlagCustomStatus3");
// statusbits.set(2199023255552, "BitFlagCustomStatus3");
// statusbits.set(4398046511104, "BitFlagCustomStatus3");
// statusbits.set(8796093022208, "BitFlagCustomStatus3");
// statusbits.set(17592186044416, "BitFlagCustomStatus25");
// statusbits.set(35184372088832, "BitFlagCustomStatus26");
// statusbits.set(70368744177664, "BitFlagCustomStatus27");
// statusbits.set(140737488355328, "BitFlagCustomStatus28");
// statusbits.set(281474976710656, "BitFlagCustomStatus29");
// statusbits.set(562949953421312, "BitFlagCustomStatus30");
// statusbits.set(4611686018427387903, "BitFlagAll");

/*
* Uses Long npm package, in case statuses change and we end up using
* masks > 32 bits
*/

function decodeMask(mask) {
  let statuses = [];
  statusbits.forEach((v, k) => {
    if (new Long.fromNumber(k).and(new Long.fromNumber(mask)).toNumber()) {
      statuses.push(v);
    }
  });

  return statuses.join(', ');

}

/*
* Print all ~270,000,000 unique masks, if you wish
*/

function printMasksToCSV(numbers, index, sum) {
    if (index == numbers.length) {
        console.log(sum, decodeMask(sum));
        return;
    }
    printMasksToCSV(numbers, index + 1, sum + numbers[index]);
    printMasksToCSV(numbers, index + 1, sum);
}

/*
* Generate array from mask map to use with printMasksToCSV function
*/

let keyvals = [];
statusbits.forEach((v, k) => keyvals.push(k));
