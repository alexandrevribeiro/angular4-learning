import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  template: `
  <!-- =====================================================  -->
  <!-- =========           CLASS BINDING           ========= -->
  <!-- =====================================================  -->
  <!-- Binding to a property which contains the class name:  -->
  <h1 [class]="titleClass">Using Class Binding (class name)</h1>

  <!-- Binding to a boolean property determining whether or not the class should be applied: -->
  <h1 [class.red-title]="isRedClass">Using Class Binding (boolean property)</h1>

  <!-- Using "ngClass" to bind to an object with multiple classes: -->
  <h1 [ngClass]="titleClasses">Using Class Binding (ngClass)</h1>

  <!-- =====================================================  -->
  <!-- =========           STYLE BINDING           ========= -->
  <!-- =====================================================  -->

  <!-- Binding a style attribute to a prop with its value:  -->
  <h1 [style.color]="titleColor">Using Style Binding (value)</h1>

  <!-- Binding a style attribute to a JS expression:  -->
  <h1 [style.color]="titleStyle ? 'green' : 'yellow'">Using Style Binding (condition)</h1>


  <!-- Using "ngStyle" to bind to an object with multiple styles: -->
  <h1 [ngStyle]="titleStyles">Using Style Binding (ngStyle)</h1>
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

  titleClass = 'red-title';
  isRedClass = true;
  titleClasses = {
    'red-title': true,
    'large-title': true
  }

  titleColor = 'red';
  titleStyle = true;
  titleStyles = {
    'color': 'gray',
    'font-size': '3em'
  }
}
