import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { ApiResponse } from '../../shared/interfaces/api-response';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.scss']
})
export class PropertyViewComponent implements OnInit {

  userInfo: any;
  thumbnailImage: any;
  propertyImage:any;
  videos:any;
  images350:any;
  //listThumbnailImages:any = [];
  allFiles: any;

  edit: Boolean = false;
  property: any;
  filePath:any = environment.fileRepo;

  constructor(
    private http: HttpService,
    private cookieService: CookieService,
    private appGlobals: AppGlobals,
    private toastrService:ToastrService) {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.checkProperty();
  }

  checkProperty() {
    if (this.cookieService.get('property')) {
      this.property = JSON.parse(this.cookieService.get('property'));
      this.edit = true;
    }
  }

  ngOnInit(): void {
  }

  fileChange(event: any, type: any) {
    this.checkProperty();
    if (this.edit) {
      let file: any = _.first(event.target.files);
      let formData = new FormData();
      formData.append('files[]', file);
      let url:any;

      if (event.target.files.length > 0) {

        this.http.postFiles(this.appGlobals.urls.uploadFile, formData).subscribe((resp: any) => {
          const data: any = resp.response.data;
          let postData = {
            propertyId:this.property._id,
            thumbImage:data.files[0],
            type:type
          }

          url = this.appGlobals.urls.addThumbnailImage
          // if (type == 1) {
          //   url = this.appGlobals.urls.addThumbnailImage
          // }else if (type == 2) {
          //   url = this.appGlobals.urls.addThumbnailImage
          // }else if (type == 3) {
          //   url = this.appGlobals.urls.addThumbnailImage
          // }else if (type ==4) {
          //   url = this.appGlobals.urls.addThumbnailImage
          // }

          this.http.postRequest(url, postData).subscribe((resp: any) => {
              
            this.getPropertyById(this.property._id);
          })

        }, (errReponse: any) => {
          const err: ApiResponse = errReponse.error;
          this.toastrService.error(err.response.error, this.appGlobals.toastTypes.ERROR);
        });
      }

      if (type == 1) {
        this.thumbnailImage = null;
      }
    }else {
      this.toastrService.error('Please add Property details first', this.appGlobals.toastTypes.ERROR);
    }
  }

  
  getPropertyById(propertyId:any) {
    this.http.postRequest(this.appGlobals.urls.getPropertyById,{propertyId:propertyId}).subscribe((resp:any) => {
      let data = resp.response.data;
      this.cookieService.set('property', JSON.stringify(data));
      this.property = data;
    })
  }
}
