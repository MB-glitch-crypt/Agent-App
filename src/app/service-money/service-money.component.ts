import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-service-money',
  templateUrl: './service-money.component.html',
  styleUrls: ['./service-money.component.css']
})
export class ServiceMoneyComponent implements OnInit {

  constructor(private router:Router, private global:GlobalVarService) { }
  goToConn(data:any): void{
    console.log(data)
    this.router.navigate(['/otp_form'])


  }
  ngOnInit(): void {
  }

}
