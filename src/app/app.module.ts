import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressesViewComponent } from './addresses-view/addresses-view.component';
import {AddressesService} from "./addresses.service";

@NgModule({
  declarations: [
    AppComponent,
    AddressesViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
