// 單一職責原則 Single Responsibility Principle（SRP）

"use strict";

// Action
class IConnectionManager {

    dial(phoneNumber) {
        console.log(`call number ${phoneNumber}`);
        return phoneNumber;
    }
    hangup() {
        console.log(`hangup the phone`);
        return 'hangup';
    }
}

// Send Data
class IDataTransfer {

    sendData(cm) {
        console.log(`sending data: ${cm}`);
    }
}

// Phone
class Phone {
    constructor(cm, dt) {
        this.ConnectionManager = cm;
        this.DataTransfer = dt;
    }
}

const iphone = new Phone(
    new IConnectionManager(),
    new IDataTransfer()
);

// call number
iphone.DataTransfer.sendData(iphone.ConnectionManager.dial('0800-888-123'));

// hangup
iphone.DataTransfer.sendData(iphone.ConnectionManager.hangup());

// node .\01-SRP.js