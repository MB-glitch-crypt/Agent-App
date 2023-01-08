import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';

  constructor(private auth:AuthService, private router:Router) {}

 ngOnInit(): void {
  }

  loginUser():void{

    this.auth.login().then(() => {
      this.router.navigate(['/home']);
    })
  }




  // onLogin(user) {
  //   this.errorMessage='';
  //   console.log(user);
  //   this.auth.login(user)
  //     .subscribe(
  //       resp => {

  //         //this.auth.convertToUser_= true;
  //         let jwt = resp.headers.get('Authorization');
  //         this.auth.saveToken(jwt);

  //         this.router.navigateByUrl("/menu");
  //       },
  //       err => {
  //         console.log(err);
  //         this.errorMessage='Vérifier vos informations';

  //        }
  //     );
  //   // this.router.navigateByUrl("/menu");
  // }

}
