import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-servir-par-espece',
  templateUrl: './servir-par-espece.component.html',
  styleUrls: ['./servir-par-espece.component.css']
})
export class ServirParEspeceComponent implements OnInit {

  constructor(private router:Router, private global:GlobalVarService) { }
  goToConn(data:any): void{
    console.log(data)
    this.router.navigate(['/home/serve-monnaie'])


  }

  ngOnInit(): void {
  }

}
