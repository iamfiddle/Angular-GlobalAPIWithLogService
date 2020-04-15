import { Injectable } from '@angular/core';
import { LogType, LogLevel } from './log-constants';

@Injectable({
  providedIn: 'root'
})

export class LogMaster {

  //Variable declaration
  private entryDate: Date = new Date();
  private message: string;
  private extraInfo: any[] = [];
  private logWithDate: boolean;

  //Message Level and LogType should not be updated by user | ErrorType should be greater than or equal to logType
  /*
    LogLevel and LogType Relation:

      Dev/SIT: (LogLevel.Dev) && (LogType =All(1) and client ErrorType =All(Everything))
      UAT: (LogLevel.UAT) && (LogType >=Error(5) and client ErrorType >=Error(5&6))
      Production: (LogLevel.Prd) && (LogType >=Lethal(6) and client ErrorType >=Lethal(6))
  */
  private logLevel: LogLevel = LogLevel.Dev;
  private logType: LogType = LogType.All;

  //Public Properties
  set Message(value) {
    this.message = value;
  }
  get Message() {
    return this.message;
  }

  set ExtraInfo(value) {
    this.extraInfo = value;
  }
  get ExtraInfo() {
    return this.extraInfo;
  }

  set LogwithDate(value) {
    this.logWithDate = value;
  }
  get LogWithDate() {
    return this.logWithDate;
  }

  set EntryDate(value) {
    this.entryDate = value;
  }
  get EntryDate() {

    return this.entryDate;
  }

  BuildLogMessage(errorType:LogType): string {
    if (this.ShouldLogin(errorType)) {
      let returnVal: string = ``;

      if (this.logWithDate) {
        returnVal = `${this.entryDate} - `;
      }
      returnVal += `Level:  ${LogLevel[this.logLevel]} `;
      returnVal += `Type:   ${LogType[this.logType]} `;
      returnVal += ` - Message: ${this.message} `;
      if (this.extraInfo.length) {
        returnVal += ` - Extra Info: ${this.FormatParameters(this.extraInfo)}`;
      }
      return returnVal;
    }
  }

  private ShouldLogin(errorType: LogType): boolean {
    let shouldLog: boolean = false;
   
    if (this.logLevel == LogLevel.Dev || this.logLevel == LogLevel.SIT) {      
      if ((this.logType >= LogType.All) && errorType>=this.logType) 
        shouldLog = true;
    }
    else if (this.logLevel == LogLevel.UAT) {
      if (this.logType >= LogType.Error && errorType>=this.logType)
        shouldLog = true;
    }
    else if (this.logLevel == LogLevel.Prd) {
      if (this.logType >= LogType.Lethal && errorType>=this.logType)
        shouldLog = true;
    }
    return shouldLog;
  }
  private FormatParameters(params: any[]): string {
    let returnVal: string = params.join(",");

    //Check rest parameter if its empty and for at least one object in the array
    if (params.some(p => typeof p == "object")) {
      returnVal = "";
      // Build comma-delimited params string
      for (let item of params) {
        returnVal += JSON.stringify(item) + ",";
      }
    }
    return returnVal;
  }
}