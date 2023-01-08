import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Client } from '../model/client-model';
import { Beneficiare } from '../model/beneficiare-model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  url = environment.baseURL
  constructor(private http: HttpClient) { }

  addBeneficiary(identityNumber: string,data:any){
    return this.http.post<Beneficiare[]>(`${this.url}beneficiary/${identityNumber}`,data)
  }
  getAllBeneficiaryByClientId(identityNumber: string){

    return this.http.get<Client[]>(`${this.url}beneficiary/${identityNumber}`);

  }

  addClient(data:any){
    return this.http.post<Beneficiare[]>(`${this.url}prospect}`,data)
  }
  getClientById(identityNumber: string){

    return this.http.get<Client[]>(`${this.url}prospect/${identityNumber}`);

  }
}
