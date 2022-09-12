import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementTableComponent } from './departement-table.component';

describe('DepartementTableComponent', () => {
  let component: DepartementTableComponent;
  let fixture: ComponentFixture<DepartementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
