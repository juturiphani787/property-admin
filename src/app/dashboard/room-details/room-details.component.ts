import { Component, Input, OnInit, Output, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
    roomDetailsForm: FormGroup = new FormGroup({});

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.createFrom();
  }

  createFrom() {
    this.roomDetailsForm = this.formBuilder.group({
      roomName: ['', Validators.required],
      roomBeds: [''],
      roomBaths: [''],
      roomType: [''],
      maxGuests: [''],
      maxAdults: [''],
      email: [''],
      children: [''],
      availableRooms: [''],
      phone: [''],
      rent: [''],
      shortDescription: [''],
      detailDescription: [''],
      address: [''],
      zipcode: [''],
      city: [''],
      state: [''],
      nationality: [''],
    });
  }


  GetroomDetailsForm() {
    return this.roomDetailsForm
  }


}
