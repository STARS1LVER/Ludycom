import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAreasComponent } from './register-areas.component';

describe('RegisterAreasComponent', () => {
  let component: RegisterAreasComponent;
  let fixture: ComponentFixture<RegisterAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
