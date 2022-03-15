import Car from "../Car";
import ICarBuilder from "./ICarBuilder";

export default class CarBuilder implements ICarBuilder{
    private _car!:Car;
    constructor(){
        this.reset()
    }
    reset(): void {
this._car = new Car()
    }
    setSeats(seatQuantity:number): void {
        this._car.seats=seatQuantity;
    }
    setEngine(modelEngine:string): void {
        this._car.engine=modelEngine;
    }
    setGPS(modelGPS:string): void {
        this._car.GPS=modelGPS;
    }
    get car():Car{
        return this._car;
    }
}