import { Component, Input, OnInit, Output, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})

export class PropertyDetailsComponent implements OnInit {
  propertyDetailsForm: FormGroup = new FormGroup({});
  
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
    this.propertyDetailsForm = this.formBuilder.group({
      propertyName: ['',Validators.required],
      propertyBeds: [''],
      propertyBaths: [''],
      propertyType: [''],
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

  
  GetPropertyDetailsForm() {
    return this.propertyDetailsForm
  }

  ChangeBorderColor(field:any) {
    return field.error ? 'red' : 'green';
  }


}
