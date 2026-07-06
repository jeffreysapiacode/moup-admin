import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptView } from './transcript-view';

describe('TranscriptView', () => {
  let component: TranscriptView;
  let fixture: ComponentFixture<TranscriptView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptView],
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
