import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client-model';
import { VariableGlobalService } from '../services/variable-global.service';

@Component({
  selector: 'app-emission-transfert-espece',
  templateUrl: './emission-transfert-espece.component.html',
  styleUrls: ['./emission-transfert-espece.component.css']
})
export class EmissionTransfertEspeceComponent implements OnInit {

  client: Client []| undefined
  select: string | undefined
  name:string|undefined
  constructor(
    private router:Router,
    private serviceglobal: VariableGlobalService,
   // private keycloakService: KeycloakService,
    private service:ProspectServiceService
  ) { }

  ngOnInit(): void {
  }

  getClientById(id:string){
    return this.service.getClientById(id).subscribe((response: Client[]) =>
     {
         this.client=response;
         if(response == null){
           alert("le client n'exsiste pas il faut ")
           //this.router.navigate([''])
         }
         else {
           this.router.navigate(['/user_data'])
           this.serviceglobal.setMyVariable("byaccount")
          // this.name = this.keycloakService.getUsername();
           console.log(this.name)
         }
     });

     }

}
