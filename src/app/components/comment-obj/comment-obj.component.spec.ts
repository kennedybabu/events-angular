import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentObjComponent } from './comment-obj.component';

describe('CommentObjComponent', () => {
  let component: CommentObjComponent;
  let fixture: ComponentFixture<CommentObjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentObjComponent]
    });
    fixture = TestBed.createComponent(CommentObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
