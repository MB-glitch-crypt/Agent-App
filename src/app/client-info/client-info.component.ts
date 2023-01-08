import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToTransfert():void{
    this.router.navigate(['/account_transfer'])
  }

}
