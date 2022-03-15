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
