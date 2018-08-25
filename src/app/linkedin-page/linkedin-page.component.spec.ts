import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPageComponent } from './linkedin-page.component';

describe('LinkedinPageComponent', () => {
  let component: LinkedinPageComponent;
  let fixture: ComponentFixture<LinkedinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
