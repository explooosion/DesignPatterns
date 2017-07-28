// 倚賴倒置原則 Dependence Inversion Principle（DIP）

/**
 * 1. 高層模組不該倚賴低層模組，兩者都應該倚賴其抽象
 * 2. 抽象不應該倚賴細節
 * 3. 細節應該倚賴抽象
 */

// 修正後

// 汽車 - 介面
class ICar {
    run() {}
}

// 汽車 - 賓士 - 實作
class Benz extends ICar {
    run() {
        console.log('賓士汽車開始行駛...');
    }
}

// 汽車 - 寶馬 - 實作
class BMW extends ICar {
    run() {
        console.log('寶馬汽車開始行駛...');
    }
}

// 司機 - 介面
class IDriver {
    constructor() {
        this.car = new ICar();
    }
    drive(_car) {
        this.car = _car;
    }
}

// 司機 - 實作
class Driver extends IDriver {
    drive(_car) {
        _car.run();
    }
}

let Robby = new Driver();
let benz = new Benz();
let bmw = new BMW();

Robby.drive(benz);
Robby.drive(bmw);