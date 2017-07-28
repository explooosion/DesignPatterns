// 倚賴倒置原則 Dependence Inversion Principle（DIP）

/**
 * 1. 高層模組不該倚賴低層模組，兩者都應該倚賴其抽象
 * 2. 抽象不應該倚賴細節
 * 3. 細節應該倚賴抽象
 */

'use strict';


// 賓士
class Benz {
    constructor() {}
    run() {
        console.log('賓士汽車開始行駛...');
    }
}

// 寶馬
class BMW {
    constructor() {}
    run() {
        console.log('寶馬汽車開始行駛...');
    }
}

// 駕駛
class Driver {
    constructor() {
        this.car = new Benz();
    }
    driver(_car) {
        if (_car.constructor === Benz) {
            this.car = _car;
            this.car.run();
        } else {
            console.log('無法駕駛，只會開賓士車...');
        }
    }
}

let Robby = new Driver();
let benz = new Benz();
let bmw = new BMW();

Robby.driver(benz);

// 高耦合狀態下，只能行駛賓士車子，
Robby.driver(bmw);