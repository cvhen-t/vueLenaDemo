import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiuchengRoutingModule } from './liucheng-routing.module';
import { LiuchengComponent } from './liucheng.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
@NgModule({
  declarations: [
    LiuchengComponent
  ],
  imports: [
    CommonModule,
    LiuchengRoutingModule,
    NzModalModule,
    NzSelectModule,
    FormsModule
  ]
})
export class LiuchengModule { }
