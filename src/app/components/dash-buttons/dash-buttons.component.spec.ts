import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashButtonsComponent } from './dash-buttons.component';

describe('DashButtonsComponent', () => {
  let component: DashButtonsComponent;
  let fixture: ComponentFixture<DashButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashButtonsComponent]
    });
    fixture = TestBed.createComponent(DashButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
