import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class MainService {
  Characters:Array<any>;

  constructor(private _http: Http) {
    this.Characters = [];
   }

  SyncWithArrayInService(){
    return this.Characters;
  }
  
  getCharacter(cb){
    var randNumberForCharacter = Math.floor(Math.random()* 88)+1
    this._http.get(`https://swapi.co/api/people/${randNumberForCharacter}`).subscribe((res)=>
    {
      this.Characters.push(res.json());
      console.log(res.json());
      cb();
    });
  }
}
