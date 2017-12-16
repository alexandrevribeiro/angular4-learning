import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prop.BindingComponent } from './prop.binding.component';

describe('Prop.BindingComponent', () => {
  let component: Prop.BindingComponent;
  let fixture: ComponentFixture<Prop.BindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prop.BindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prop.BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
