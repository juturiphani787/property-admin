import { Component, OnInit } from '@angular/core';
import { MasterService } from "../../services/master.service";


@Component({
  selector: 'app-cobrowse-config',
  templateUrl: './cobrowse-config.component.html',
  styleUrls: ['./cobrowse-config.component.scss']
})
export class CobrowseConfigComponent implements OnInit {

  edit: any;
  voilationConfig: any = {

  }

  websites: any[] = [
    {
      edit: false
    }
  ]

  constructor(public masterService: MasterService) { }

  ngOnInit(): void {
    this.getConfigurations()
  }

  getConfigurations(){
    this.masterService.getCobrowseConfigs().subscribe(data => {
      if(data.error_code == 1) {
        this.websites = data.output || this.websites.push({});
      }
    });
  }

  addNewWebsite() {
    this.websites.push({});
  }

  deleteWebsite(index: any) {
    this.websites.splice(index, 1);
  }

  saveSite(form:any, website: any) {
    console.log(website);
    if(form.valid) {
      website.edit = false;

      console.log("Sdsdskdsk",website)
      this.masterService.createCObrowseConifg(website).subscribe(data => {
        this.getConfigurations()
      });
    }
  }

}
