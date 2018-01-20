import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service'

@Component({
  selector: 'app-starcomponent',
  templateUrl: './starcomponent.component.html',
  styleUrls: ['./starcomponent.component.css']
})
export class StarcomponentComponent implements OnInit {
  Characters:Array<any>;

  constructor(private _mainService: MainService) {
    this.Characters = [];
   }

  SyncWithArrayInService(){
    this.Characters = this._mainService.SyncWithArrayInService();
  }
  getCharacter(){
    this._mainService.getCharacter(() =>{
        this.SyncWithArrayInService();
    });
  }

  ngOnInit() {
  }

}
