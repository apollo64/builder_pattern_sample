(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarBuilder_1 = __importDefault(require("./Builder/CarBuilder"));
const Director_1 = __importDefault(require("./Director"));
const builder = new CarBuilder_1.default();
const director = new Director_1.default();
director.builder = builder;
director.buildCountryCar();
console.log(builder.car);

},{"./Builder/CarBuilder":2,"./Director":4}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../Car"));
class CarBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this._car = new Car_1.default();
    }
    setSeats(seatQuantity) {
        this._car.seats = seatQuantity;
    }
    setEngine(modelEngine) {
        this._car.engine = modelEngine;
    }
    setGPS(modelGPS) {
        this._car.GPS = modelGPS;
    }
    get car() {
        return this._car;
    }
}
exports.default = CarBuilder;

},{"../Car":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
}
exports.default = Car;
;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    set builder(builder) {
        this._builder = builder;
    }
    buildCountryCar() {
        this._builder.setSeats(4);
        this._builder.setGPS('sony GPS');
        this._builder.setEngine('4litre');
    }
}
exports.default = Director;

},{}]},{},[1]);
