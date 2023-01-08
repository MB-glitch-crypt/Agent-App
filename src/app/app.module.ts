import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileComponent } from './profile/profile.component';
import { EmissionTransfertEspeceComponent } from './emission-transfert-espece/emission-transfert-espece.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { TransfertAccountComponent } from './transfert-account/transfert-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManageAccountsComponent,
    CreateAccountsComponent,
    SideNavComponent,
    ToolbarComponent,
    HeaderComponent,
    ProfileComponent,
    EmissionTransfertEspeceComponent,
    ClientInfoComponent,
    TransfertAccountComponent 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatSidenavModule,
    MatDividerModule, 
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
