import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns'; 
interface ItemData {
  id: number,
  Earlylevel: number,
  Earlyclassification: string,
  Earlycontent: string,
  Earlystatus: number,
  Earlytime: string,
  newstatus: number,
  readtatus: number,
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: ItemData[] = [];
  setOfCheckedId = new Set<number>();
  backdata: ItemData[] = [];
  topactive = 'all'
  checkALl = []

  newleng = 0


  //预警分类下拉选择
  option = [
    {
      nzLabel: '船坏了',
      nzValue: '在港停泊超时0'
    },
    {
      nzLabel: '桨坏了',
      nzValue: '在港停泊超时1'
    },

  ]
  selectedValue = null;

  onSearch(value: string): void {

    this.setOfCheckedId=new Set()

    let PendingWorkdata = this.backdata.filter(item => {
      return item.Earlyclassification == value
    })
    this.listOfData = PendingWorkdata;

    console.log(value, '1312313');

  }

  updateCheckedSet(data: any, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(data);
    } else {
      this.setOfCheckedId.delete(data);
    }
    this.checkALl = Array.from(this.setOfCheckedId)
  }

  //选中的回调
  onItemChecked(data: any, checked: boolean, i): void {

    this.updateCheckedSet(data, checked);
    this.refreshCheckedStatus();

    // console.log(Array.from(this.setOfCheckedId));
    
    console.log(this.checkALl);


  }

  onAllChecked(value: boolean): void {
    //全部选中的数据
    console.log(value, 'this.listOfCurrentPageData');
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {

    this.listOfData = []

    for (let i = 0; i < 100; i++) {
      let level = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
      let newstatus = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let readtatus = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let obj = {
        id: i * level + 0.2 * 1.524 * 1.3 * Math.random() * 10000000,
        Earlylevel: level,
        Earlyclassification: `在港停泊超时${newstatus}`,
        Earlycontent: `天禄海，预空时间 2021-10-10 15:00:00，预空港口QINGDAO，距离预空天数${i}天，未安排后续航次任务。 `,
        Earlystatus: 1,
        Earlytime: `2019.12.${level}-2121.10.${newstatus}`,
        newstatus: newstatus,
        readtatus: readtatus
      }
      this.listOfData.push(obj)
      this.backdata = this.listOfData


      this.newleng = this.listOfData.filter(item => {
        return item.newstatus == 1
      }).length

    }
  }




  //时间选择
  onChange(result: Date): void {

    const nowStr = format(result[0], 'yyyy-MM-dd');
    console.log('Selected Time: ', nowStr);
  }

  onOk(result: Date | Date[] | null): void {
    const nowStr = format(result[1], 'yyyy-MM-dd');
    console.log('Selected Time: ', nowStr);
  }

  onCalendarChange(result: Array<Date | null>): void {
    const nowStr = format(result[0], 'yyyy-MM-dd');
    console.log('Selected Time: ', nowStr);
  }

  //top操作
  tabularData(type: string) {
    if (type == 'all') {
      this.topactive = 'all'
      return this.listOfData = this.backdata
    }
    if (type == 'PendingWork') {
      this.topactive = 'PendingWork'
      let PendingWorkdata = this.backdata.filter(item => {
        return item.newstatus == 1
      })
      this.listOfData = PendingWorkdata;
    }
    if (type == 'wokeOver') {
      this.topactive = 'wokeOver'
      let wokeOver = this.backdata.filter(item => {
        return item.newstatus == 0
      })
      this.listOfData = wokeOver;
    }
    return []
  }

  //表格操作
  minbbbutton(type) {
    console.log(type);

    //middleset判断
    let key = 'readtatus'
    let value = 0
    if (type == 'middsetIsworkover' || type == 'middsetIsunwork') {
      key = 'newstatus'
    }
    if (type == 'middsetIsunread' || type == 'middsetIsunwork') {
      value = 1
    }
    // if (type == 'middsetIsread') {
    //设置已读
    this.listOfData.forEach(item => {
      this.checkALl.forEach(itemb => {

        if (item.id == itemb.id) {


          item[key] = value

        }
      })
    })

    this.newleng = this.listOfData.filter(item => {


      return item.newstatus == 1
    }).length
    // }
    // if (type == 'middsetIsunread') {
    //   //设置未读
    //   this.listOfData.forEach(item => {
    //     this.checkALl.forEach(itemb => {
    //       if (item.id == itemb.id) {
    //         item.readtatus = 1
    //       }
    //     })
    //   })
    // }
    // if (type == 'middsetIsworkover') {
    //   //设置已处理
    //   this.listOfData.forEach(item => {
    //     this.checkALl.forEach(itemb => {
    //       if (item.id == itemb.id) {
    //         item.newstatus = 0
    //       }
    //     })
    //   })
    // }

    // if (type == 'middsetIsunwork') {
    //   //设置待处理
    //   this.listOfData.forEach(item => {
    //     this.checkALl.forEach(itemb => {
    //       if (item.id == itemb.id) {
    //         item.newstatus = 1
    //       }
    //     })
    //   })
    // }

  }

  operatetable(type, tableData) {
    console.log(1);

    if (type == 'setreader') {
      this.listOfData.forEach(item => {
        if (item.id == tableData.id) {
          let readtype = item.readtatus == 0 ? 1 : 0
          item.readtatus = readtype
        }
      })
    }
    if (type == 'setprocessing') {
      this.listOfData.forEach(item => {
        if (item.id == tableData.id) {
          let newstype = item.newstatus == 0 ? 1 : 0
          item.newstatus = newstype
        }
      })

    }
    //middleset判断
    if (type == 'middsetIsread') {
      //设置已读
      this.listOfData.forEach(item => {
        this.checkALl.forEach(itemb => {

          if (item.id == itemb.id) {
            item.readtatus = 0
          }
        })
      })
    }
    if (type == 'middsetIsunread') {
      //设置未读
      this.listOfData.forEach(item => {
        this.checkALl.forEach(itemb => {
          if (item.id == itemb.id) {
            item.readtatus = 1
          }
        })
      })
    }
    if (type == 'middsetIsworkover') {
      //设置已处理
      this.listOfData.forEach(item => {
        this.checkALl.forEach(itemb => {
          if (item.id == itemb.id) {
            item.newstatus = 0
          }
        })
      })
    }

    if (type == 'middsetIsunwork') {
      //设置待处理
      this.listOfData.forEach(item => {
        this.checkALl.forEach(itemb => {
          if (item.id == itemb.id) {
            item.newstatus = 1
          }
        })
      })
    }


  }


}
