import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks(){
    return this._http.get('/tasks')
}
  getTaskbyId(id){
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newtask){
    console.log(newtask)
    return this._http.post('/tasks',newtask);
  }
  editTask(id,updatetask){
    console.log("Service:",updatetask);
    return this._http.put(`/tasks/${id}`,updatetask);
  }
  deleteTask(id){
    console.log("deleting",id);
    return this._http.delete(`/tasks/${id}`);
  }
}
