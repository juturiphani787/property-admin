import { Component, OnInit } from '@angular/core';
import { ExportService } from "../../services/export.service";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReportsService } from "../../services/reports.service";
import * as moment from "moment";
import { FilterPipe } from "../../shared/pipes/filter.pipe";
import { ChatsComponent } from "../../shared/components/chats/chats.component";
import { ChatInfoComponent } from "../../shared/components/chat-info/chat-info.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-live-chat-reports',
  templateUrl: './live-chat-reports.component.html',
  styleUrls: ['./live-chat-reports.component.scss']
})
export class LiveChatReportsComponent implements OnInit {

  filter: FormGroup = this.fb.group({
    search: [''],
    channel: [],
    violationType: [],
    fromDate: [new Date()],
    toDate: [new Date()]
  });
  today: any = new Date();
  filterToggle: boolean = false;
  violationTypes: any[] = ["Left Screen", "Mobile Violation"];
  channel_list: any[] = [
    {
      name: 'Web Chat',
      value: 'webchat'
    },
    {
      name: 'Messenger',
      value: 'messenger'
    },
    {
      name: 'Video Chat',
      value: 'videochat'
    }
  ];
  reports: any[] = [];
  filteredReports: any[] = [];
  pagination: {
    page: number,
    count: number,
    total: number,
  } = {
    page: 1,
    count: 10,
    total: 0
  };

  constructor(
    public exportService: ExportService,
    public fb: FormBuilder,
    public reportService: ReportsService,
    public myFilter: FilterPipe,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getReports();
    this.filterChanges();
  }

  getReports() {
    let fromDate = this.formatDate(this.filter.value.fromDate)
    let toDate = this.formatDate(this.filter.value.toDate);
    this.reportService.getLiveChatReports(fromDate, toDate).subscribe(data => {
      if(Array.isArray(data.output)) {
        this.reports = data.output;
        this.filterReports();
      }
    })
  }

  filterReports() {
    setTimeout(() => {
      this.filteredReports = this.myFilter.transform(
        this.reports,
        [
          {
            value: this.filter.value.search,
            fields: ['customerName', 'email', 'phoneNumber', 'userID', 'userName']
          },
          {
            value: this.filter.value.channel,
            fields: ['chatType']
          }
        ]
      );
      this.pagination.total = this.filteredReports.length;
      this.pagination.page = 1;
    }, 1);
  }

  filterChanges() {
    this.filter.get('search')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
    this.filter.get('channel')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
  }

  openChat(report: any) {
    this.dialog.open(ChatsComponent, {data: {chats: report.conversation, customerName: report.customerName},width: '500px'});
  }

  openChatInfo(report: any) {
    this.dialog.open(ChatInfoComponent, {data: report ,width: '500px'});
  }

  formatDate(date:any) {
    return '' +  date.getUTCFullYear().toString() + (date.getUTCMonth() + 1).toString() + ((date.getDate()) < 10 ? "0": "") + date.getDate().toString();
  }

  exportReports() {
    let exportData: any[] = [];
    this.filteredReports.forEach((report: any) => {
      exportData.push({
        "Date & Time": moment(report.chatStart).format('dd-MM-yyyy hh:mm a'),
        "Agent ID": report.userID,
        "Agent Name": report.userName,
        "Customer Name": report.customerName,
        "Customer Email": report.email,
        "Customer Phone NUmber": report.phoneNumber,
        "Channel": report.chatType,
        "Chat Duration": this.timeDiff(report.chatDate, report.chatStart),
        "Disconnected By": report.disconnectedBy,
        "Wrap-up Code": report.acw ? report.acw[0]?.option : '--' ,
        "Wrap-up Notes": report.acw ? report.acw[0]?.textare : '--'
      })
    });
    this.exportService.exportAsExcelFile(exportData, 'live_chat_reports');
  }

  timeDiff(end: any, start: any) {
    if(end && start) {
      return  moment.utc((moment(end).diff(moment(start)))).format('HH:mm:ss');
    } else {
      return '--';
    }
  }

}
