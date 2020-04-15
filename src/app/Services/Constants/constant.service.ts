import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  private authToken: string;
  get AuthToken() {
    return this.authToken;
  }
  set AuthToken(value) {
    this.authToken = value;
  }

  readonly apiEndPoint = "/api";
  //readonly errorApiEndPoint = "/api/logs";
  readonly apiHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
}