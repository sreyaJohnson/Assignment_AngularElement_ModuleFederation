import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogSeriesComponent } from './vlog-series.component';

describe('VlogSeriesComponent', () => {
  let component: VlogSeriesComponent;
  let fixture: ComponentFixture<VlogSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlogSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlogSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
