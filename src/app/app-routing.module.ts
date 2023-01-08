import { ProfileComponent } from './profile/profile.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  { path: 'home', component:HomeComponent,

    children: [
      {path:'', component:ProfileComponent},
      {path:'createaccounts', component:CreateAccountsComponent},
      {path:'manageaccounts', component:ManageAccountsComponent},
      {path:'profile', component:ProfileComponent}
    ]
}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
