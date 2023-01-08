
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-emission-transfert-debit',
  templateUrl: './emission-transfert-debit.component.html',
  styleUrls: ['./emission-transfert-debit.component.css']
})
export class EmissionTransfertDebitComponent implements OnInit {

  select : string | undefined
  constructor(private router:Router,private serviceglobal: GlobalVarService){ }

  ngOnInit(): void {
  }

  goToConn(data:any): void{
    console.log(data)
    this.router.navigate(['/home/client_info'])
    this.serviceglobal.setMyVariable("bywallet")
  }

}
