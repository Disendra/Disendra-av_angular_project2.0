import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTIMONIALSComponent } from './testimonials.component';

describe('TESTIMONIALSComponent', () => {
  let component: TESTIMONIALSComponent;
  let fixture: ComponentFixture<TESTIMONIALSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TESTIMONIALSComponent]
    });
    fixture = TestBed.createComponent(TESTIMONIALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
