import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing.module';
import { MappingComponent } from './mapping.component';
import { AddMappingComponent } from './add-mapping/add-mapping.component';


@NgModule({
  declarations: [
    MappingComponent,
    AddMappingComponent
  ],
  imports: [
    CommonModule,
    MappingRoutingModule
  ]
})
export class MappingModule { }
