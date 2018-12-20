class Drone {
    constructor(id, name)
 {
     this._id=id;
    
 }
 get id()
 {
     console.log('in id getter');
     return this._id +'Temporary';

 }
 set id(value)
 {
     this._id= value;
 }
}
let drone = new Drone('A123');
drone.id='B1234';
console.log("Drone id:" + drone.id);