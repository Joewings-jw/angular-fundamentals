import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name:string;
  password:string;
  login_invalid = false

  constructor(public auth: AuthService, private router:Router) { }

  ngOnInit() {
  }
  login(form){
    this.auth.login_user(form.user_name, form.password)
      .subscribe(res=>{
        if(!res){
          this.login_invalid = true
        }else {
          this.router.navigate(['events'])
        }
      })
    
  }

  cancel(){
    this.router.navigate(['events'])
  }

}
