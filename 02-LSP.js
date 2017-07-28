// 里氏替換原則 Liskov Substituion Principle（LSP）

"use strict";

// 槍
class AbstractGun {
    shoot() {
        console.log('槍枝射擊...');
    }
}

// 手槍
class HandGun extends AbstractGun {
    shoot() {
        console.log('手槍射擊...');
    }
}

// 步槍
class Rifle extends AbstractGun {
    shoot() {
        console.log('步槍射擊...');
    }
}

// 玩具槍
class ToyGun extends AbstractGun {
    shoot() {
        // 玩具槍無法射出子彈
    }
}

// 狙擊槍 (步槍裝上鏡頭)
class AUG extends Rifle {
    zoomOut() {
        console.log('透過望遠鏡觀察敵人...');
    }
    shoot() {
        console.log('狙擊槍射擊...');
    }
}


// 士兵
class Soldier {

    constructor() {
        this.gun = new AbstractGun();
    }
    setGun(_gun) {
        this.gun = _gun;
    }
    killEnemy() {
        console.log('士兵開始殺敵人...');
        this.gun.shoot();
    }
}

// 狙擊手
class Snipper {

    constructor() {
        this.gun = new Rifle();
    }

    setRifle(_rifle) {
        this.gun = _rifle;
    }

    killEnemy() {
        this.gun.zoomOut();
        this.gun.shoot();
    }

}

let Robby = new Soldier();
Robby.setGun(new HandGun());
Robby.killEnemy();

Robby.setGun(new Rifle());
Robby.killEnemy();

// Robby.setGun(new ToyGun());
// Robby.killEnemy();

console.log('-----------------');

let Robby_Sn = new Snipper();
Robby_Sn.setRifle(new AUG());
Robby_Sn.killEnemy();