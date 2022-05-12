import { Component, OnInit } from '@angular/core';
import { saveAs } from "file-saver";
@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.less']
})
export class TableTDComponent implements OnInit {

  
  
  listOfData= [
    {key: 1, expand: false, name: '远洋 - VLOC'},
    {key: 2, expand: false, name: '远洋 - 几内亚项目'},
    {key: 3, expand: false, name: '远洋 - 国电投项目'},
    {key: 4, expand: false, name: '远洋 - 好望角'},
    {key: 5, expand: false, name: '远洋 - MINICAP'},
    {key: 6, expand: false, name: '远洋 - 巴拿马'},
    {key: 7, expand: false, name: '远洋 - 大灵便'},
    {key: 8, expand: false, name: '远洋 - 小灵便'},
    {key: 9, expand: false, name: '沿海'}
  ];
  isShow=true
  isShow2=true
  isShow3=true
  isShow4=true


  isshowclick(type){
    if(type==1){
      this.isShow=!this.isShow
    }

    if(type==2){
    this.isShow2=!this.isShow2
    }
    if(type==3){
      this.isShow3=!this.isShow3
      } 
       if(type==4){
        this.isShow4=!this.isShow4
        }
  }
  constructor() { }

  ngOnInit(): void {
  }
  exportTable() {
    const blob = new Blob([document.getElementById('exportableTable').innerHTML], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    saveAs(blob, '明细文档.xlsx');
  }
}
