import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSubscribersComponent } from './mail-subscribers.component';

describe('MailSubscribersComponent', () => {
  let component: MailSubscribersComponent;
  let fixture: ComponentFixture<MailSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
