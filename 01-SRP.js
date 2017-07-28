// 單一職責原則 Single Responsibility Principle（SRP）
/**
 * 電話的操作與資料傳輸應分開，個別職責。
 */

"use strict";

// 動作
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

// 傳輸資料
class IDataTransfer {
    sendData(cm) {
        console.log(`sending data: ${cm}`);
    }
}

// 手機
class Phone {
    constructor(cm, dt) {
        this.ConnectionManager = cm;
        this.DataTransfer = dt;
    }
}

// 實體化一支手機 iphone
const iphone = new Phone(
    new IConnectionManager(),
    new IDataTransfer()
);

// call number
iphone.DataTransfer.sendData(iphone.ConnectionManager.dial('0800-888-123'));

// hangup
iphone.DataTransfer.sendData(iphone.ConnectionManager.hangup());

// node .\01-SRP.js