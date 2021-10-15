import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrowseConfigComponent } from './cobrowse-config.component';

describe('CobrowseConfigComponent', () => {
  let component: CobrowseConfigComponent;
  let fixture: ComponentFixture<CobrowseConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrowseConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrowseConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
