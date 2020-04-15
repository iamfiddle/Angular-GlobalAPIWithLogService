import { LogFactory } from './log-factory';
import { LogMaster } from './global-logging.service';
import { LogType } from './log-constants';

export class LogConsole extends LogFactory {

  message: string;
  Log(entry: LogMaster, type: LogType): boolean {
    this.message = entry.BuildLogMessage(type);
    if (this.message) {
      console.log(this.message);
      return true;
    }
    else
      return false;
  }
  Dispose(): boolean {
    console.clear();
    return true;
  }
}