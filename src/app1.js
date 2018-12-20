class Drone {
   constructor(id, name)
{
    this.id=id;
    this.name=name;
    console.log('id:' + id + 'name:' + name);
}

 static getcompany()
 {
     console.log("static method " );
 }
  fly()
      {
console.log("drone id:" + this.id + "is flying");
      }
  
}

let drone = new Drone('44','saloni');
let drone2= new Drone('17','diya');

console.log("id:" + drone.id + "id2:"+ drone2.id );

Drone.getcompany();

drone.fly();
drone2.fly();
