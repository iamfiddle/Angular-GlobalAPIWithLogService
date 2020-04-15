import { LogType } from './log-constants';
import { GlobalAPIService } from './../global.api.service';
import { LogFactory } from './log-factory';
import { LogMaster } from './global-logging.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantService } from '../../Constants/constant.service';

export class LogApi extends LogFactory {

  messageBody: string;
  //private constant: ConstantService;
  //httpClient: HttpClient;
  constructor() {
    super();
    // Set location
    this.location = "/logs";
  }

  // Add log entry to back end data store using API
  Log(entry: LogMaster, api: GlobalAPIService, type:LogType): Observable<object> {
    this.messageBody = entry.BuildLogMessage(type);
    if (this.messageBody) {
      return api.PostRequest(this.location, { message: this.messageBody });
      
    }
    else
      return Observable.create(null);
  }

  // Clear all log entries from Api
  Dispose(id: number, api: GlobalAPIService): Observable<object> {
    return api.DeleteRequest(this.location, id);
  }
}