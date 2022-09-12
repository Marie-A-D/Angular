import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneTableComponent } from './commune-table.component';

describe('CommuneTableComponent', () => {
  let component: CommuneTableComponent;
  let fixture: ComponentFixture<CommuneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
