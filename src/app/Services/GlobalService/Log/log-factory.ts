import { LogMaster } from './global-logging.service';
import { Observable } from 'rxjs';

export abstract class LogFactory {

    location: string;

    //abstract Log$(logEntry: LogMaster, ...args:any):Observable<object>
    abstract Log(logEntry: LogMaster, ...args:any):boolean
    abstract Dispose(...args:any): boolean
}