import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Button } from './ui/button.js';
import { application } from './app.js';


export class HomePage extends Page {

    constructor() {
        super('Home');

    }
    createElement() {
        super.createElement();

        let i = new Image('../images/newyork.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px ; font-size: 40;'
        let b = new Button('self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

       // b = new Button('Drones');
        //b.setStyleString(styleString);
        //b.appendToElement(this.element);
        //b.element.click(() => application.activateRoute('Drones'));

    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }

}