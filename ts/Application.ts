import CarBuilder from "./Builder/CarBuilder";
import Director from "./Director";

const builder = new CarBuilder()
const director = new Director()
director.builder = builder;
director.buildCountryCar(); 
console.log(builder.car)