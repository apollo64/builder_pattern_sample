export default interface ICarBuilder {
    reset():void; 
    setSeats(seatQuantity:number):void; 
    setEngine(modelEngine: string):void; 
    setGPS(modelGPS:string):void; 
}