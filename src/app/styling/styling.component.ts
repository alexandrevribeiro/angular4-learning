import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  template: `
  <!-- Binding to a property which contains the class name:  -->
  <h1 [class]="titleClass">Using class binding (class name)</h1>

  <!-- Binding to a boolean property determining whether or not the class should be applied: -->
  <h1 [class.red-title]="isRedClass">Using class binding (boolean property)</h1>

  <!-- Using "ngClass" to bind to an object with multiple classes: -->
  <h1 [ngClass]="titleClasses">Using class binding (ngClass)</h1>
  `,
  
  styles: [`
  
  h1 {
    text-decoration: underline;
  }

  .red-title {
    color: #af0000;
  }

  .large-title {
    font-size: 3em;
  }

  `]
})
export class StylingComponent {

  titleClass = "red-title";
  isRedClass = true;
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
}
