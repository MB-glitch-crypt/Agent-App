import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableGlobalService {
  private mavariable: any;

  constructor() { }
  getMyVariable() {
    return this.mavariable;
  }

  setMyVariable(value: any) {
    this.mavariable = value;
  }

}
