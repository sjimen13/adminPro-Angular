import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Chart1Component } from './pages/chart1/chart1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chart1', component: Chart1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NoPageFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
