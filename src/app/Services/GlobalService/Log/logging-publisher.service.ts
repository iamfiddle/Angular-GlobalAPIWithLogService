import { Injectable } from '@angular/core';
import { LogFactory } from './log-factory';
import { LogConsole } from './log-console';
import { LogApi } from './log-api';

@Injectable({
  providedIn: 'root'
})
export class LoggPublisherService {

  constructor() {
    this.buildPublishers();
  }

  private publishers: LogFactory[] = [];

  //Building publishers
  buildPublishers(): void {
    // Create instance of LogConsole  and LogAPI Class
    this.publishers.push(new LogConsole());
    this.publishers.push(new LogApi());
  }
}
