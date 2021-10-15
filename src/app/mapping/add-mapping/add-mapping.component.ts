import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mapping',
  templateUrl: './add-mapping.component.html',
  styleUrls: ['./add-mapping.component.scss']
})
export class AddMappingComponent implements OnInit {

  teams: any[] = [
    {
      name: "Avengers"
    },
    {
      name: "Ravegers"
    },
    {
      name: "Gardians"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
