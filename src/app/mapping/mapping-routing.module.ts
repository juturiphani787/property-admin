import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MappingComponent } from './mapping.component';
import { AddMappingComponent } from './add-mapping/add-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: MappingComponent,
    children: [
      {
        path: 'add',
        component: AddMappingComponent
      },
      {
        path: 'config'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingRoutingModule { }
