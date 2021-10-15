import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as moment from "moment";

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent implements OnInit {

  chatDuration:any;
  videoDuration: any;

  constructor(
    public dialog: MatDialogRef<ChatInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data.video_call_history && this.data.video_call_history.length) {
      let item = this.data.video_call_history[0];
      this.videoDuration = moment.utc((moment(item.end).diff(moment(item.start)))).format('HH:mm:ss');
    }
    if(this.data.chatStart && this.data.chatDate) {
      this.chatDuration = moment.utc((moment(this.data.chatDate).diff(moment(this.data.chatStart)))).format('HH:mm:ss');
    }
  }

  ngAfterViewInit() {
    let elem = document.getElementById("review");
    if(elem) {
      elem.innerHTML = "\'" + this.data.customerReview + "\'";
    }
  }

  close() {
    this.dialog.close();
  }
}
