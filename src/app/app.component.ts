import { LogType } from './Services/GlobalService/Log/log-constants';
import { LogApi } from './Services/GlobalService/Log/log-api';
import { ConstantService } from './Services/Constants/constant.service';
import { APIService } from './Services/GlobalService/api/global.api.service';
import { Component } from '@angular/core';
import { LogConsole } from './Services/GlobalService/Log/log-console';
import { LogMaster } from './Services/GlobalService/Log/global-logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectStructure';

  constructor(private apiService: APIService, private constant: ConstantService
    , private logConsole: LogConsole
    , private logEntry: LogMaster,
    private logApi: LogApi) {

    this.constant.AuthToken = "JWTOrSAMLOrOAuthToken";
  }
  books: any = [];
  messageBody: any;

  LogInfo() {
    this.logEntry.Message = "LogInfo function gets called";
    //this.logEntry.ExtraInfo = ["Some additional message", "some more"];
    this.logConsole.Log(this.logEntry, LogType.Info);
    this.logApi.Log(this.logEntry, this.apiService, LogType.Error);
    //this.logApi.Dispose(2, this.apiService);
  }

  OnGet() {
    //Loging using Global Log Service
    this.LogInfo();

    this.apiService.GetRequest$("/Books", false, () => { console.log("This Callback function executed") }).subscribe(
      result => {
        this.books = result;
        this.logEntry.Message=JSON.stringify(result);
        this.logConsole.Log(this.logEntry, LogType.Info);
      },
      error => { console.log(`Error while getting data: ${error}`) },
      () => console.log('HTTP request has been completed')
    )
  }

  OnPost() {
    this.messageBody = { id: 4, name: "Krishna's Key", Author: "Ashwin Sanghi", description: "Its a mythological book" };

    this.apiService.PostRequest$("/Books", this.messageBody, null, () => { console.log("This Callback sould be executed") }).subscribe(
      result => {
        this.logEntry=result[0];
        this.logConsole.Log(this.logEntry, LogType.Info);
        this.books = result;
      },
      error => { console.log(`Error while posting data: ${error.error}`) }
    )
  }

  OnDelete() {
    this.apiService.DeleteRequest$("Books", 4, false, () => { console.log("This Callback should be called") }).subscribe(
      result => { console.log(`Http Response: ${result}`); },
      error => { console.log(`Error while deleting data: ${error}`) }
    )
  }
}