import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpageComponent } from './eventpage.component';

describe('EventpageComponent', () => {
  let component: EventpageComponent;
  let fixture: ComponentFixture<EventpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventpageComponent]
    });
    fixture = TestBed.createComponent(EventpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
