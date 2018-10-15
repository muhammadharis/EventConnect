import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNofificationComponent } from './chat-nofification.component';

describe('ChatNofificationComponent', () => {
  let component: ChatNofificationComponent;
  let fixture: ComponentFixture<ChatNofificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNofificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNofificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
