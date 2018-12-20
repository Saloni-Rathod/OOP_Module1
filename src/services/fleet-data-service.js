import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { Errordata } from './data-error.js';
import { DataError } from './data-error.js';

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    getCarByLicense(license) {
        return this.cars.find(function (car) {
            return car.license === license;
        });
    }

    // getCarsSortedByLicense() {
    //     return this.cars.sort(function(car1, car2) {
    //         if (car1.license < car2.license)
    //         return -1;
    //         if(car1.license > car2.license)
    //         return -1;
    //         return 0;
    //     });
    // }




    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                     if(this.validateCarData(data)){
                         let car = this.loadCar(data);
                         if(car)
                         this.cars.push(car);
                     }
                     else
                     {
                         let e= new DataError('Invalid car data',car);
                         this.errors.push(e);
                     }
                    // let car = this.loadCar(data);
                    // this.cars.push(car);

                    break;

                case 'drone':
                    this.drones.push(data);
                    break;
                default:

                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }



    loadCar(car) {
        let c = new Car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
    }
    catch(e) {
        this.errors.push(new DataError('error loading car', car));
    };

    validateCarData(car) {
        let requireProps = 'license model latLong miles make'.split('');
        let hasErrors = false;

        for (let field of requireProps) {
            if (!car[field]) {
                this.errors.push(new DataError('invalid field ${field}', car));
                hasErrors = true;
                return (car);
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('invalid mileage', car));
            hasErrors = true;

        }
        return !hasErrors;

    }


}
