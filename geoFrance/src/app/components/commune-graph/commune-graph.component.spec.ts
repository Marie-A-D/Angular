import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneGraphComponent } from './commune-graph.component';

describe('CommuneGraphComponent', () => {
  let component: CommuneGraphComponent;
  let fixture: ComponentFixture<CommuneGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
