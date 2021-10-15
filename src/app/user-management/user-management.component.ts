import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { ExportService } from "../services/export.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FilterPipe } from "../shared/pipes/filter.pipe";


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  paginator: {
    page: any,
    count: any,
    total: any
  } = {
    page: 1,
    count: 10,
    total: 6
  }
  filter: FormGroup = this.fb.group({
    search: [''],
    user_type: [],
    user_work_type: []
  });
  listOfUsers: any[] = [];
  filteredUsers: any[] = [];
  showForm: boolean = false;
  editUserData: any = {};
  user_types: any[] = ["agent", "supervisor"];
  user_work_types = [
    { id: 1, name: 'Work From Home', value: 'WFH' },
    { id: 1, name: 'In-House Employee', value: 'NRML' }
  ];

  constructor(
    public user: UserService,
    public exportService: ExportService,
    public fb: FormBuilder,
    public myFilter: FilterPipe
  ) { }

  ngOnInit(): void {
    // this.paginator.total
    // this.getAgent();
    // this.filterChanges();
  }

  getAgent(){
    this.user.getAgents().subscribe(data => {
      this.listOfUsers = data.output;
      this.filteredUsers = this.listOfUsers;
      this.paginator.total = data.output.length;
    })
  }

  filterChanges() {
    this.filter.get('search')?.valueChanges.subscribe(value => {
      this.filterUsers();
    })
    this.filter.get('user_type')?.valueChanges.subscribe(value => {
      this.filterUsers();
    })
    this.filter.get('user_work_type')?.valueChanges.subscribe(value => {
      this.filterUsers();
    })
  }

  filterUsers() {
    setTimeout(() => {
      this.filteredUsers = this.myFilter.transform(
        this.listOfUsers,
        [
          {
            value: this.filter.value.search,
            fields: ['userName', 'userID']
          },
          {
            value: this.filter.value.user_type,
            fields: ['user_type']
          },
          {
            value: this.filter.value.user_work_type,
            fields: ['userWorkType']
          }
        ]
      );
      this.paginator.total = this.filteredUsers.length;
      this.paginator.page = 1;
    }, 1);
  }

  editUser(agent: any) {
    this.showForm = true;
    this.user.editUserData = agent;
  }

  pageChange() {
    console.log('adada', this.paginator.page);
  }

  deleteUser(agent: any) {
    console.log(agent?.userID)
    this.user.deleteUser(agent?.userID).subscribe(data => {
      this.getAgent()
    })
    console.log('deleting user', agent)
  }

  exportReports() {
    let exportData: any[] = [];
    this.filteredUsers.forEach((agent: any) => {
      exportData.push({
        "ID": agent.userID,
        "Name": agent.userName,
        "User Type": agent.user_type,
        "Department": '--',
        "Privileges": '--'
      })
    });
    this.exportService.exportAsExcelFile(exportData, 'users');
  }

  sortArray(arr: any, key: any) {
    arr.sort((a: any,b: any) => {
      return a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1;
    })
  }
}
