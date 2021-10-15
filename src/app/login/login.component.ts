import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  getLocation(){  }

  signIn() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.userService.login({request:this.loginForm.value}).subscribe(data => {
      console.log(data);
    });
  }
}
