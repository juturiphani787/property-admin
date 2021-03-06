import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public user: UserService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.user.logout().subscribe(data => {

    })
  }

}
