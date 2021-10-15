import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {

  constructor() { }

  menuItems: any[] = [
    {
      name: "WFH Configuration",
      url: 'wfh',
      icon:'templates.svg'
    },
    {
      name: "Co-browse Configuration",
      url: 'cobrowse',
      icon:'holiday_management.svg'
    },
    {
      name: "Privileges",
      url: 'previleges',
      icon:'privileges.svg'
    },
    {
      name: "Brand Configuration",
      url: 'brand',
      icon:'brand_config.svg'
    },
    {
      name: "License Manager",
      url: 'licence',
      icon:'licence_manager.svg'
    },
    {
      name: "Customer report",
      url: 'customer',
      icon:'customer_report.svg'
    },
    {
      name: "Holiday Management",
      url: 'holiday',
      icon:'holiday_management.svg'
    },
    {
      name: "Out of office",
      url: 'outOfOffice',
      icon:'out_of_office.svg'
    },
    {
      name: "Templates",
      url: 'template',
      icon:'templates.svg'
    }
  ]

  ngOnInit(): void {
  }

}
