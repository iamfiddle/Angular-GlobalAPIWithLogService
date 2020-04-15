import { LogApi } from './Services/GlobalService/Log/log-api';
import { LogConsole } from './Services/GlobalService/Log/log-console';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConstantService } from './Services/Constants/constant.service';
import { GlobalAPIService } from './Services/GlobalService/global.api.service';
import { HttpClientModule } from '@angular/common/http';
import { LogFactory } from './Services/GlobalService/Log/log-factory';
import { LogMaster } from './Services/GlobalService/Log/global-logging.service';


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
    GlobalAPIService,
    LogConsole, LogMaster,
    LogApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }