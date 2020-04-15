import { LogType } from './Services/GlobalService/Log/log-constants';
import { LogApi } from './Services/GlobalService/Log/log-api';
import { ConstantService } from './Services/Constants/constant.service';
import { GlobalAPIService } from './Services/GlobalService/global.api.service';
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

  constructor(private apiService: GlobalAPIService, private constant: ConstantService
    ,private logConsole: LogConsole
    ,private logEntry: LogMaster, 
    private logApi: LogApi) {

    this.constant.AuthToken = "JWTOrSAMLOrOAuthToken";
  }
  books: any = [];
  messageBody: any;
  
  LogInfo() {        
    this.logEntry.Message = "This is just a message";
    this.logConsole.Log(this.logEntry,LogType.Info).subscribe();
    this.logApi.Log(this.logEntry, this.apiService, LogType.Error).subscribe();
    //this.logApi.Dispose(2, this.apiService).subscribe(sub=>{});
  }

  OnGet() {

    this.apiService.GetRequest("/Books", false, () => { console.log("This Callback should be executed") }).subscribe(
      result => {
        this.books = result;
        console.log(this.books);
        //console.log("Hello: " + this.books[0].name);
        
        //Loging using Global Log Service
        this.LogInfo();
      },
      error => { console.log(`Error while getting data: ${error}`) },
      () => console.log('HTTP request has been completed')
    )
  }

  OnPost() {
    this.messageBody = { id: 4, name: "Krishna's Key", Author: "Ashwin Sanghi", description: "Its a mythological book" };

    this.apiService.PostRequest("/Books",this.messageBody, null, () => { console.log("This Callback sould be executed") }).subscribe(
      result => {
        console.log(result); this.books = result;
      },
      error => { console.log(`Error while posting data: ${error.error}`) }
    )
  }

  OnDelete() {
    this.apiService.DeleteRequest("Books",4, false, () => { console.log("This Callback should be called") }).subscribe(
      result => { console.log(`Http Response: ${result}`); },
      error => { console.log(`Error while deleting data: ${error}`) }
    )
  }
}