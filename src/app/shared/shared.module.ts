import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { FilterPipe } from "./pipes/filter.pipe";
import { ChatsComponent } from './components/chats/chats.component';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';
import { TooltipModule  } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    PaginatorComponent,
    ImageViewerComponent,
    ChatsComponent,
    ChatInfoComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    DragDropModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    PaginatorComponent,
    NgSelectModule,
    FormsModule,
    DragDropModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule,
    TooltipModule
  ],
  providers: [FilterPipe]
})
export class SharedModule { }
