import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstantService } from './Services/Constants/constant.service';
import { HttpClientModule } from '@angular/common/http';
import { LogMaster } from './Services/GlobalService/Log/global-logging.service';
import { APIService } from './Services/GlobalService/api/global.api.service';
import { LogApi } from './Services/GlobalService/Log/log-api';
import { LogConsole } from './Services/GlobalService/Log/log-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // { provide: ConstantService, useValue: ConstantService},
    ConstantService,
    APIService,
    LogConsole, 
    LogMaster,
    LogApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }