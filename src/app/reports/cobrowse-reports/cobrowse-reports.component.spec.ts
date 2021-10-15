import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrowseReportsComponent } from './cobrowse-reports.component';

describe('CobrowseReportsComponent', () => {
  let component: CobrowseReportsComponent;
  let fixture: ComponentFixture<CobrowseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrowseReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrowseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
