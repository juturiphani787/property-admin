import { Component, OnInit } from '@angular/core';
import { ExportService } from "../../services/export.service";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cobrowse-reports',
  templateUrl: './cobrowse-reports.component.html',
  styleUrls: ['./cobrowse-reports.component.scss']
})
export class CobrowseReportsComponent implements OnInit {

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
      name: 'Video Chat',
      value: 'videochat'
    }
  ];
  filteredReports: any[] = [];

  constructor(
    public exportService: ExportService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  exportReports() {
    this.exportService.exportAsExcelFile(this.filteredReports, 'reports');
  }

}
