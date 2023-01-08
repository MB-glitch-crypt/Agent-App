import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-servir-par-debit',
  templateUrl: './servir-par-debit.component.html',
  styleUrls: ['./servir-par-debit.component.css']
})
export class ServirParDebitComponent implements OnInit {

  constructor(private router:Router, private global:GlobalVarService) { }
  goToConn(data:any): void{
    console.log(data)
    this.router.navigate(['/home/service-money'])

  }

  ngOnInit(): void {
    
 
  }
}
