import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as moment from "moment";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    var wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, worksheet, 'Binary values')
    XLSX.writeFile(wb, excelFileName + '_export_' + moment().format('MMMDD_hhmmssa') + '.xlsx')
  }
}
