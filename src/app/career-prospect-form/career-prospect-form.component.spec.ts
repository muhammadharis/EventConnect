import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerProspectFormComponent } from './career-prospect-form.component';

describe('CareerProspectFormComponent', () => {
  let component: CareerProspectFormComponent;
  let fixture: ComponentFixture<CareerProspectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerProspectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerProspectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
