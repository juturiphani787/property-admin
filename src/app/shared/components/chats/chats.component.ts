import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ChatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  viewImageUrl: any;

  ngOnInit(): void {
  }

  close() {
    this.dialog.close();
  }

  download(url: any, filename: any) {
    fetch(url).then(function(t) {
      return t.blob().then((b)=>{
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", filename);
        a.click();
      });
    });
  }
}
