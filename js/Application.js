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
