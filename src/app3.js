class Vehicle
{
constructor(licensenum)
{
this.licensenum=licensenum;
}
}
class Drone extends Vehicle{

}
class Car extends Vehicle {
    constructor(licensenum)
    {
        super(licensenum);
    }

}

let c = new Car('A123');
console.log(c.licensenum);
