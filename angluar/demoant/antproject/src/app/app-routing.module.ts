import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'tableTD', loadChildren: () => import('./pages/table-td/table-td.module').then(m => m.TableTDModule) },
  { path: 'liucheng', loadChildren: () => import('./liucheng/liucheng.module').then(m => m.LiuchengModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
