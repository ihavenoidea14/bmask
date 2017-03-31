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
statusbits.set(524288, "BitFlagCustomStatus4");
statusbits.set(4194304, "BitFlagClearToClose");
statusbits.set(8388608, "BitFlagDocsSent");
statusbits.set(16777216, "BitFlagCollateralSent");
statusbits.set(33554432, "BitFlagShipped");
statusbits.set(67108864, "BitFlagCustomStatus7");
statusbits.set(134217728, "BitFlagCustomStatus8");
statusbits.set(268435456, "BitFlagCustomStatus9");
statusbits.set(536870912, "BitFlagCustomStatus10");
statusbits.set(1073741824, "BitFlagCustomStatus11");
statusbits.set(4611686018427387903, "BitFlagAll");

module.exports = statusbits;
