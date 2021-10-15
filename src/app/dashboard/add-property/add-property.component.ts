import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { ToastrService } from 'ngx-toastr';
import { PropertyDetailsComponent } from '../property-details/property-details.component';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild(PropertyDetailsComponent) propertyDetailsComponent: PropertyDetailsComponent;
  userInfo: any;
  edit: Boolean = false;
  property:any;

  constructor(
    private http: HttpService,
    private cookieService: CookieService,
    private appGlobals: AppGlobals,
    private toastrService:ToastrService) {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    if(this.cookieService.get('property')) {
      this.property = JSON.parse(this.cookieService.get('property'));
      this.edit = true;
    }
  }

  ngOnInit(): void {
    this.cookieService.delete('room');
    
    this.cookieService.delete('showrooms');
  }

  addProperty() {
    let propertyDetailsForm = this.propertyDetailsComponent.GetPropertyDetailsForm();
    let postData = {
      userId: this.userInfo.id,
      propertyDetails: propertyDetailsForm.value
    }

    this.http.postRequest(this.appGlobals.urls.addProperty, postData).subscribe((resp: any) => {
      let data = resp.response.data;
      this.cookieService.set('property', JSON.stringify(data));
      this.property = data;
      this.toastrService.success('Successfully Added', this.appGlobals.toastTypes.SUCCESS);
    }, error => {
      console.log(error)
    })
  }

}
