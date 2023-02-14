import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage.component';
import {Product} from './product.component'
import { Quanlysanpham } from './quanlysanpham.component';
import { Themsanpham } from './themsanpham.component';
import { Xoasanpham } from './xoasanpham.component';
import { Suasanpham } from './suasanpham.component';
import { Quanlynhanvien } from './quanlynhanvien.component';
import { Notforfound } from './notforfound.component';

const routes: Routes = [
  {path:'dangnhap',component:Homepage},
  {path:'trangchu', component: Product},
  {path:'quanlysanpham',component:Quanlysanpham},
  {path:'themsanpham', component:Themsanpham},
  {path:'xoasanpham',component:Xoasanpham},
  {path:'chinhsuasanpham',component:Suasanpham},
  {path:'quanlynhanvien',component:Quanlynhanvien},
  {path:'',component:Homepage},
  {path:'**',component:Notforfound}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
