import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-component',
  // Template options:
  // Option 1) File URL
  // templateUrl: './sample.component.html',  

  // Option 2) Inline html
  // template: '<h5>Sample of inline template.</h5>',

  // Option 3) Multiple lines html
  template: `
  <h3>Sample of multiple lines html</h3>
  <hr/>
  <p>Person: {{ person.name }}, {{ person.gender }}, {{ person.age }}, {{ person.location }}</p>
  <hr/>

  <ul>
    <li *ngFor="let item of jsFrameworks">{{ item }}</li>
  </ul>
  <hr/>

  <p *ngIf="somethingExists; else otherTmpl">Yeah, something exists.</p>  
  <hr/>

  <div *ngIf="somethingExists; then tmpl1 else tmpl2"></div>
  <hr/>

  <ng-template #otherTmpl>No, something doesn't exist.</ng-template>
  <ng-template #tmpl1>Something exists: True.</ng-template>
  <ng-template #tmpl2>Something exists: False.</ng-template>  
  `,

  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person = {
    name: 'Alexandre',
    gender: 'male',
    age: 27,
    location: 'Brazil'
  };

  jsFrameworks = ['Vue.js', 'React', 'Angular'];

  somethingExists = true;

}
