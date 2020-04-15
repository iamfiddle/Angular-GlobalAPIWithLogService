import { LogFactory } from './log-factory';
import { LogMaster } from './global-logging.service';
import { LogType } from './log-constants';
import { APIService } from '../api/global.api.service';

export class LogApi extends LogFactory {

  messageBody: string;

  constructor() {
    super();
    // Set location
    this.location = "/logs";
  }

  // Add log entry to back end data store using API
  Log(entry: LogMaster, api: APIService, type: LogType): boolean {
    this.messageBody = entry.BuildLogMessage(type);
    if (this.messageBody) {
      api.PostRequest$(this.location, { message: this.messageBody }).subscribe();
      return true;
    }
    else
      return false;
  }

  // Clear all log entries from Api
  Dispose(id: number, api: APIService): boolean {
    api.DeleteRequest$(this.location, id).subscribe();
    return true;
  }
}