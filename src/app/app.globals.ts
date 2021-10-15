import { Injectable } from '@angular/core';
@Injectable()
export class AppGlobals {

  readonly urls = {
    uploadFile:'/file/upload',
    addProperty: '/addProperty',
    addThumbnailImage:'/addThumbnailImage',
    getPropertyById:'/getPropertyById',
    listAllProperties:'/listAllProperties',
    listPropertyRooms:'/listPropertyRooms',
    addRoom:'/addRoom',
    listAllRegisterUsers: '/listAllRegisterUsers',
    listUserBookings: '/listUserBookings',
    listBookings:'/listBookings'
  };

  readonly toastTypes: any = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'danger'
  };
}
