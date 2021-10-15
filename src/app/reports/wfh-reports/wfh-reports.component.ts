import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { ReportsService } from "../../services/reports.service";
import { ImageViewerComponent } from "../../shared/components/image-viewer/image-viewer.component";
import { FilterPipe } from "../../shared/pipes/filter.pipe";
import { ExportService } from "../../services/export.service";

@Component({
  selector: 'app-wfh-reports',
  templateUrl: './wfh-reports.component.html',
  styleUrls: ['./wfh-reports.component.scss']
})
export class WfhReportsComponent implements OnInit {

  filter: FormGroup = this.fb.group({
    agent_name: [''],
    user_type: [],
    violationType: [],
    fromDate: [new Date()],
    toDate: [new Date()]
  });
  today: any = new Date();
  reports: any[] = [];
  filterToggle: boolean = false;
  viewImageUrl: any;
  violationTypes: any[] = ["Left Screen", "Mobile", "Multiple People", "Imposter"];
  user_types: any[] = ["agent", "supervisor"];
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
    public fb: FormBuilder,
    public reportService: ReportsService,
    public myFilter: FilterPipe,
    public exportService: ExportService
  ) {
  }

  ngOnInit(): void {
    this.filterChanges();
    this.getreports();
  }

  getreports() {
    // console.log(this.filter.value.fromDate.getDate());
    let fromDate = moment(this.filter.value.fromDate).format('yyyy-MM-DD');
    let toDate = moment(this.filter.value.toDate).add(1, 'days').format('yyyy-MM-DD');
    console.log(fromDate, toDate);
    this.reportService.getViolationReports(fromDate, toDate).subscribe(data => {
      if(data.error_code == 1) {
        this.reports = data.output || [];
        this.filterReports();
      }
    })
  }

  formatDate(date:any) {
    // return '' +  date.getUTCFullYear().toString() + '-' + (date.getUTCMonth() + 1).toString() + '-' + moment(date).add(1, 'days').format('DD');
  }

  filterReports() {
    setTimeout(() => {
      this.filteredReports = this.myFilter.transform(
        this.reports,
        [
          {
            value: this.filter.value.agent_name,
            fields: ['userName']
          },
          {
            value: this.filter.value.user_type,
            fields: ['user_type']
          },
          {
            value: this.filter.value.violationType,
            fields: ['violationType']
          }
        ]
      );
      this.pagination.total = this.filteredReports.length;
      this.pagination.page = 1;
    }, 1);
  }

  filterChanges() {
    this.filter.get('agent_name')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
    this.filter.get('user_type')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
    this.filter.get('violationType')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
  }

  viewImage(url: any) {
    this.viewImageUrl = url;
    // if(url) {
    //   this.dialog.open(ImageViewerComponent, {data: {url: url} ,width: '80%', height: '80%', maxWidth: '900px'})
    // }
  }

  exportReports() {
    let exportData: any[] = [];
    this.filteredReports.forEach((report: any) => {
      exportData.push({
        "Date & Time": moment(report.dateTime).format('dd-MM-yyyy hh:mm a'),
        "Agent Name": report.userName,
        "User Type": report.user_type,
        "Violation type": report.violationType,
        "Latitude": report.lat,
        "Longitude": report.long
      })
    });
    this.exportService.exportAsExcelFile(exportData, 'wfh_reports');
  }

}
