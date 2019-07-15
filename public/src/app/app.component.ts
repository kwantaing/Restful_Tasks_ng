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

  ngOnInit(){
    this.title = "MEAN";
    // this.getTasksfromService();
    // this.getTaskfromService();
  }

  showAll():void{
    console.log("Showing ALL")
    this.getTasksfromService();
  }

  showOne(id:String):void{
    console.log("Showing One with id:");
    this.getTaskfromService(id)
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
      this.task = data["task"]

  });
}
}
