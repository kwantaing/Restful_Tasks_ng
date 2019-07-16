import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowOneComponent } from './show-one/show-one.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
