import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import {CommonModule} from '@angular/common'
import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  imports: [
    NzIconModule,
    NzDatePickerModule,
    FormsModule,
    NzInputModule,
    CommonModule,
    WelcomeRoutingModule,
    NzSelectModule,
    NzTableModule,
    NzDividerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
