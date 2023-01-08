import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
  private myVariable: any;


  constructor() { }
  getMyVariable() {
    return this.myVariable;
  }

  setMyVariable(value: any) {
    this.myVariable = value;
  }


}
