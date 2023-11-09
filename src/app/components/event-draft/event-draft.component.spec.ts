import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDraftComponent } from './event-draft.component';

describe('EventDraftComponent', () => {
  let component: EventDraftComponent;
  let fixture: ComponentFixture<EventDraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDraftComponent]
    });
    fixture = TestBed.createComponent(EventDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
