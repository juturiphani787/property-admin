import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatReportsComponent } from './live-chat-reports.component';

describe('LiveChatReportsComponent', () => {
  let component: LiveChatReportsComponent;
  let fixture: ComponentFixture<LiveChatReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChatReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChatReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
