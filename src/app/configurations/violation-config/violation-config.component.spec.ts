import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationConfigComponent } from './violation-config.component';

describe('ViolationConfigComponent', () => {
  let component: ViolationConfigComponent;
  let fixture: ComponentFixture<ViolationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
