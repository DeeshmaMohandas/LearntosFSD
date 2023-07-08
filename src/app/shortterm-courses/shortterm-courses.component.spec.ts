import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorttermCoursesComponent } from './shortterm-courses.component';

describe('ShorttermCoursesComponent', () => {
  let component: ShorttermCoursesComponent;
  let fixture: ComponentFixture<ShorttermCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShorttermCoursesComponent]
    });
    fixture = TestBed.createComponent(ShorttermCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
