import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-violation-config',
  templateUrl: './violation-config.component.html',
  styleUrls: ['./violation-config.component.scss']
})
export class ViolationConfigComponent implements OnInit {

  mins: any[] = this.array(30);
  secs: any[] = this.array(60);

  voilationConfig: any = {
    leftScreen: 60,
    mobileOrCamera: 60,
    eatingOrDrinking: 60,
    imposter: 60,
    multiplePeople: 60,
    leftScreenAction: 'None',
    mobileOrCameraAction: 'None',
    eatingOrDrinkingAction: 'None',
    imposterAction: 'None',
    multiplePeopleAction: 'None'
  }
  actions: any[] = ['None', 'Logout', 'Lock Account'];

  constructor() { }

  ngOnInit(): void {
  }

  array(n:any) {
    let array = [];
    for(let i=1;i <= n; i++) {
      array.push(i);
    }
    return array;
  }

}
