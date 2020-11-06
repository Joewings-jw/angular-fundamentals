import { Injectable } from '@angular/core';
import { IUser } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  current_user:IUser;

  constructor() { }

  login_user(user_name: string, password: string){
    this.current_user = {
      id:2,
      first_name:'Wings',
      last_name:'Tosh',
      user_name:'king'
    }
  }

  is_authenticated(){
    return !!this.current_user
  }

  update_currentUser(first_name: string, last_name: string){
    this.current_user.first_name = first_name;
    this.current_user.last_name = last_name;

  }
}
