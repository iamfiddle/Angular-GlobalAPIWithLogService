import { LogFactory } from './log-factory';
import { Observable } from 'rxjs';
import { LogMaster } from './global-logging.service';
import { LogType } from './log-constants';

export class LogConsole extends LogFactory {
    Log(entry: LogMaster,type:LogType): Observable<object> {
      
      // Log to console
      console.log(entry.BuildLogMessage(type));
      return Observable.create(true);
    }
    Dispose(): Observable<object> {
      console.clear();
      return Observable.create(true);
    }
  }