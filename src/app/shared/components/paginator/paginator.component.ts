import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() page: number = 0;
  @Input() count: number = 0;
  @Input() total: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(pageNo:any) {
    if((pageNo-1)*this.count < this.total && pageNo > 0 ) {
      this.page = pageNo;
      this.pageChange.emit(this.page);
    }
  }

}
