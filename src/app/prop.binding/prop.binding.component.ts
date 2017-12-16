import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop.binding.component.html',
  styleUrls: ['./prop.binding.component.css']
})
export class PropBindingComponent {

  constructor() { }

  angularLogo = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  buttonStatus1 = true;
  buttonStatus2 = 'disabled';
}
