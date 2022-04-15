import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableTDComponent } from './table-td.component';

const routes: Routes = [{ path: '', component: TableTDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTDRoutingModule { }
