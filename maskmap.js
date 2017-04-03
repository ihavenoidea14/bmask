/*
* Map of all Byte status masks
*/

let statusbits = new Map();
statusbits.set("BitFlagNotAssigned", 1);
statusbits.set("BitFlagPrequal", 2);
statusbits.set("BitFlagCreditOnly", 4);
statusbits.set("BitFlagInProcessing", 8);
statusbits.set("BitFlagSubmitted", 16);
statusbits.set("BitFlagApproved", 32);
statusbits.set("BitFlagResubmitted", 64);
statusbits.set("BitFlagDeclined", 128);
statusbits.set("BitFlagInClosing", 256);
statusbits.set("BitFlagClosed", 512);
statusbits.set("BitFlagCanceled", 1024);
statusbits.set("BitFlagLead", 2048);
statusbits.set("BitFlagSuspended", 4096);
statusbits.set("BitFlagDocsSigned", 8192);
statusbits.set("BitFlagFunded", 16384);
statusbits.set("BitFlagPurchased", 32768);
statusbits.set("BitFlagCustomStatus1", 65536);
statusbits.set("BitFlagCustomStatus2", 131072);
statusbits.set("BitFlagCustomStatus4", 524288);
statusbits.set("BitFlagClearToClose", 4194304);
statusbits.set("BitFlagDocsSent", 8388608);
statusbits.set("BitFlagCollateralSent", 16777216);
statusbits.set("BitFlagShipped", 33554432);
statusbits.set("BitFlagCustomStatus7", 67108864);
statusbits.set("BitFlagCustomStatus8", 134217728);
statusbits.set("BitFlagCustomStatus9", 268435456);
statusbits.set("BitFlagCustomStatus10", 536870912);
statusbits.set("BitFlagCustomStatus11", 1073741824);
statusbits.set("BitFlagAll", 4611686018427387903);

module.exports = statusbits;
