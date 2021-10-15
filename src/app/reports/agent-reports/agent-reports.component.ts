import { Component, OnInit } from '@angular/core';
import { ExportService } from "../../services/export.service";
import { ReportsService } from "../../services/reports.service";
import { UserService } from "../../services/user.service";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FilterPipe } from "../../shared/pipes/filter.pipe";

@Component({
  selector: 'app-agent-reports',
  templateUrl: './agent-reports.component.html',
  styleUrls: ['./agent-reports.component.scss']
})
export class AgentReportsComponent implements OnInit {

  filter: FormGroup = this.fb.group({
    search: [''],
    date: [new Date()]
  });
  today: any = new Date();
  filterToggle: boolean = false;
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
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getReports();
    this.filterChanges();
  }

  getReports() {
    let date = this.formatDate2(this.filter.value.date)
    this.reportService.getAgentReports(date).subscribe((data: any) => {
      console.log(data)
      if(Array.isArray(data.output)) {
        this.reports = data.output;
        this.filterReports();
      }
    })
  }

  filterChanges() {
    this.filter.get('search')?.valueChanges.subscribe(value => {
      this.filterReports();
    })
    this.filter.get('date')?.valueChanges.subscribe(value => {
      this.getReports();
    })
  }

  filterReports() {
    setTimeout(() => {
      this.filteredReports = this.myFilter.transform(
        this.reports,
        [
          {
            value: this.filter.value.search,
            fields: ['userName']
          }
        ]
      );
      this.pagination.total = this.filteredReports.length;
      this.pagination.page = 1;
    }, 1);
  }

  formatDate(date:any) {
    return '' +  date.getUTCFullYear().toString() + (date.getUTCMonth() + 1).toString() + ((date.getDate()) < 10 ? "0": "") + date.getDate().toString();
  }
  formatDate2(date:any) {
    return '' +  date.getUTCFullYear().toString() + (date.getUTCMonth() + 1).toString() +  date.getDate().toString();
  }
  logoutUser(user: any) {
    console.log(user);
    let item = {
      userName: user.userID,
      password: user.password
    }
    this.userService.logoutUser(item).subscribe(data => {
      this.getReports();
    })
  }

  exportReports() {
    this.exportService.exportAsExcelFile(this.filteredReports, 'reports');
  }

}
