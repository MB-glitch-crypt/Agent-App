import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';
import { ProspectServiceService } from '../services/prospect-service.service';


@Component({
  selector: 'app-transfert-account',
  templateUrl: './transfert-account.component.html',
  styleUrls: ['./transfert-account.component.css']
})
export class TransfertAccountComponent implements OnInit {

  balance_step = false;
  coast_step = false;
  beneficiary_step = false;
  otp_step = false;
  step = 1;
  balance: string | undefined;
  selectedOption: string | undefined;
  selectedOptionbene: string | undefined;
  Optionbene: string | undefined;
  opt: string | undefined;
  check:boolean=false;
  globalvar:string=this.serviceglobal.getMyVariable();
  
  constructor(private router:Router,private serviceglobal: GlobalVarService, private service: ProspectServiceService) { }

  ngOnInit(): void {
  }

  next(data:any):void{

    if(this.step==1){
          this.balance_step = true;
          this.step++
          console.log(data)
    }

    else if(this.step==2){
        this.coast_step = true;
            this.step++;
            console.log(data)
    }
    else if(this.step==3){
      if(this.serviceglobal.getMyVariable()=="byaccount"){
        this.beneficiary_step = true;
        this.step++;
      }
      if(this.serviceglobal.getMyVariable()=="bywallet"){
        console.log("by wallet here")
      }

           console.log(data)

  }

  }

  previous(){
    this.step--

    if(this.step==2){
      this.coast_step = false;
    }
    if(this.step==3){
      this.beneficiary_step = false;
    }
    if(this.step==4){
      this.otp_step = false;
    }

  }

  submit(data:any){

    if(this.step==4){
      // if(this.serviceglobal.getMyVariable()=="byaccount"){
      //   console.log("by account here")
      // }
      // if(this.serviceglobal.getMyVariable()=="bywallet"){
      //   console.log("by wallet here")
      // }
      this.beneficiary_step = true;
      console.log(data)

    }
  }

  CheckBoxvalue(){
    console.log(this.check)
    if(this.check){
      this.check = false
    }
    else this.check = true

    }
  goToConn1(data:any): void{
    console.log(data)
    this.router.navigate(['/transfert_account'])
  }
}
