import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmpleadoComponent } from './register-empleado.component';

describe('RegisterEmpleadoComponent', () => {
  let component: RegisterEmpleadoComponent;
  let fixture: ComponentFixture<RegisterEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
