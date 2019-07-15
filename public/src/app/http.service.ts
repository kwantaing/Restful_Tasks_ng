import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTaskbyId();
  }

  getTasks(){
    return this._http.get('/tasks')
}
  getTaskbyId(){
    return this._http.get('/tasks/5d2cbf9feab4cd746d214e24');
  }
}
