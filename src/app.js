import $ from 'jquery';
// import $ from 'jquery';
//$.isArray([]); //works
//$('#myDiv');
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';
import { DataTable } from './ui/data-table.js';
import { GoogleMap } from './ui/google-map.js';
import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './home-page.js';
import { CarsPage} from './cars-page.js';
import { DronesPage} from './drones-page.js';
import { MapPage}   from './map-page.js';
// console.log(fleet);
//let dataService=new FleetDataService();
//dataService.loadData(fleet);
// for(let car of dataService.cars)
// console.log(car.license);

// console.log(dataService.cars);

//console.log(car);

// let cars= dataServices.getCarsSortedByLicense();
//for(let car of cars)
//console.log(car.license);

//let tb = new TitleBar('Our Application');      // for titlebar
//tb.addLink('home', '');
//tb .addLink('Cars', '');
//tb.addLink('Drones', '');
//tb.addLink('Map', '');
//tb.appendToElement($('body'));

//let b = new Button('click me');          // for button
//b.appendToElement($('body'));



export class App extends ApplicationBase {

    constructor() {
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
      //  this.addRoute('Cars', null);
        this.addRoute('drones', new DronesPage());
        this.addRoute('Map', new MapPage());


    }
}

export let application = new App();
application.show($('body'));


//let dataService = new FleetDataService();
//dataService.loadData(fleet);
//let centerOfMap = { lat: 40.783661, lng: -73.965883 };
//let map = new GoogleMap(centerOfMap, dataService.cars);
//map.appendToElement($('body'));


//let headers = "License Make Model Miles  ".split(' ');
//let dataService = new FleetDataService();
//dataService.loadData(fleet);
//let dt = new DataTable(headers, dataService.cars);

//dt.appendToElement($('body'));

 //let i = new Image('../images/newyork.jpg'); // for image
 //i.appendToElement($('body'));





