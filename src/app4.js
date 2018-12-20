class Vehicle{
start()
{
    console.log("Vehicle class");
}
 static getCompanyName()
{
    console.log("My Company");
}
}
class Drone extends Vehicle{

}
class Car extends Vehicle{
   
    start()
    {
        super.start();
    
        console.log("Car class");
    }

 static   getCompanyName()
{
    super.getCompanyName();
    console.log("My other Company");
}
}
let c = new Car();
c.start();
Car.getCompanyName();