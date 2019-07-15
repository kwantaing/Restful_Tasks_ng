import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title : String;
  tasks : Array<Object>;
  task : Object;
  newTask: Object;
  updateTask: Object;

  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.updateTask = { title: "", description: "" }
    this.title = "MEAN";
  }

  showAll():void{
    console.log("Showing ALL")
    this.getTasksfromService();
  }

  showOne(id:String):void{
    console.log("Showing One with id:");
    this.getTaskfromService(id)
  }
  onSubmit(){
    let tempObservable = this._httpService.addTask(this.newTask);
    tempObservable.subscribe(data => {
      console.log("Got data from post back",data);
    })
    this.newTask = {title: "", description: ""};
  }
  onUpdate(id){
    let tempObservable = this._httpService.editTask(id,this.updateTask);
    console.log("adsad:",this.updateTask)
    tempObservable.subscribe(data => {
      console.log("updated",data);
    })
  }
  delete(id){
    console.log(id)
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe(data => {
      console.log("deletion status:", data);
    })
    this.showAll();
  }
  getTasksfromService(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("Got our tasks!" , data);
      this.tasks = data['tasks'];
    });
  }
  getTaskfromService(id){
    let tempObservable = this._httpService.getTaskbyId(id);  //tasks/:id
    tempObservable.subscribe(data => {
      console.log("individual Task :",data);
      this.updateTask = { title: data["task"].title, description: data["task"].description}
      this.task = data["task"]

  });
}
}
