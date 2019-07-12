import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTaskbyId();
    this.getPokemon();
    this.getOvergrow();
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!" , data));
}
  getTaskbyId(){
    let tempObservable = this._http.get('/tasks/5d28d4d2df39f15989bba5e8');  //tasks/:id
    tempObservable.subscribe(data => console.log("individual Task :",data ));
  }
  getPokemon(){
    let bulbasaur = this._http.get("https://pokeapi.co/api/v2/pokemon/1");
    bulbasaur.subscribe(data => console.log("Pokemon: ",data));
  }
  getOvergrow(){
    let numPoke = this._http.get("https://pokeapi.co/api/v2/ability/65");
    numPoke.subscribe(data =>console.log(data.pokemon.length+" pokemon have Overgrow!"));
  }
}
