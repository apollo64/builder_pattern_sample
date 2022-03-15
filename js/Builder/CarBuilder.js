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
