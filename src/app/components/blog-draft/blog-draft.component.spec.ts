import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDraftComponent } from './blog-draft.component';

describe('BlogDraftComponent', () => {
  let component: BlogDraftComponent;
  let fixture: ComponentFixture<BlogDraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDraftComponent]
    });
    fixture = TestBed.createComponent(BlogDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
