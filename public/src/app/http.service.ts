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
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!" , data));
}
  getTaskbyId(){
    let tempObservable = this._http.get('/tasks/5d28d4d2df39f15989bba5e8');  //tasks/:id
    tempObservable.subscribe(data => console.log("individual Task :",data ));
  }
}
