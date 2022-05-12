import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiuchengComponent } from './liucheng.component';

const routes: Routes = [{ path: '', component: LiuchengComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiuchengRoutingModule { }
