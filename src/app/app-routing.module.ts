import { EmissionTransfertDebitComponent } from './emission-transfert-debit/emission-transfert-debit.component';
import { ProfileComponent } from './profile/profile.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { TransfertAccountComponent } from './transfert-account/transfert-account.component';
import { EmissionTransfertEspeceComponent } from './emission-transfert-espece/emission-transfert-espece.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  { path: 'home', component:HomeComponent,

    children: [
      {path:'', component:ProfileComponent},
      {path:'createaccounts', component:CreateAccountsComponent},
      {path:'manageaccounts', component:ManageAccountsComponent},
      {path:'profile', component:ProfileComponent},
      {path:'client_info', component:ClientInfoComponent},
      {path:'enespece',component:EmissionTransfertEspeceComponent},
      {path:'pardebit',component:EmissionTransfertDebitComponent},
      {path:'transfert_account', component:TransfertAccountComponent}
      
      
    ]
}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
