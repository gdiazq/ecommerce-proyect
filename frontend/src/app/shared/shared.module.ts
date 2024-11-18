import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
