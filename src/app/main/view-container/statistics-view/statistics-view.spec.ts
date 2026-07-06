import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsView } from './statistics-view';

describe('StatisticsView', () => {
  let component: StatisticsView;
  let fixture: ComponentFixture<StatisticsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsView],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
