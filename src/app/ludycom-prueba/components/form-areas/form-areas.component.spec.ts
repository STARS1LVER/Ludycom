import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAreasComponent } from './form-areas.component';

describe('FormAreasComponent', () => {
  let component: FormAreasComponent;
  let fixture: ComponentFixture<FormAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
