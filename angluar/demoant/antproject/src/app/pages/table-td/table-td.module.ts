import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableTDRoutingModule } from './table-td-routing.module';
import { TableTDComponent } from './table-td.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    TableTDComponent
  ],
  imports: [
    NzIconModule,
    NzTableModule,
    CommonModule,
    TableTDRoutingModule
  ]
})
export class TableTDModule { }
