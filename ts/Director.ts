import CarBuider from "./Builder/CarBuilder";
import Car from "./Car";

export default class Director {
    private _builder!: CarBuider;


public set builder(builder: CarBuider) {
    this._builder = builder;
}

public buildCountryCar():void {
    this._builder.setSeats(4);
    this._builder.setGPS('sony GPS');
    this._builder.setEngine('4litre');

}

}