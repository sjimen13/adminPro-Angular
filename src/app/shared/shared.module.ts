import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [BreadcrumbsComponent, SideBarComponent, HeaderComponent],
  exports: [BreadcrumbsComponent, SideBarComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
