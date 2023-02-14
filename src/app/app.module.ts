import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage } from './homepage.component';
import { Product } from './product.component';
import { Quanlysanpham } from './quanlysanpham.component';
import { Themsanpham } from './themsanpham.component';
import { Xoasanpham } from './xoasanpham.component';
import { Suasanpham } from './suasanpham.component';
import { Quanlynhanvien } from './quanlynhanvien.component';
import { Notforfound } from './notforfound.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    Product,
    Quanlysanpham,
    Themsanpham,
    Xoasanpham,
    Suasanpham,
    Quanlynhanvien,
    Notforfound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
