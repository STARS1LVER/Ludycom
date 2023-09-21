import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAreasComponent } from './table-areas.component';

describe('TableAreasComponent', () => {
  let component: TableAreasComponent;
  let fixture: ComponentFixture<TableAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
