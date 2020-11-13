import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  current_user:IUser;

  constructor(private http: HttpClient) { }

  login_user(user_name: string, password: string){

    let login_info = { username: user_name, password: password};
    let options = { headers : new HttpHeaders({'Content-Type' : 'application/json'})};

    return this.http.post('/api/login', login_info, options)
      .pipe(tap((data=> {
        this.current_user = <IUser>data['user']

      })))
      .pipe(catchError(err=> {
        return of(false)
      }))

  }

  is_authenticated(){
    return !!this.current_user
  }

  //first method for checking authentication status
  // check_auth_status(){
  //   this.http.get('/api/currentIdentity')
  //    .subscribe(data=>{
  //      if(data instanceof Object){
  //        this.current_user = <IUser>data;
  //      }
  //    })
                                          
  // }

  // the api endpoint returns null if the user is not logged in
  // and a current identity as an abject if user is logged in.

  //The second method using pipe and tap operators which exposes this method to be used around the app
  // for checking authentication status without subscribing in its used case.
  //see usage at the app.component.ts
  check_auth_status(){
    this.http.get('/api/currentIdentity')
     .pipe(tap(data=>{
       if(data instanceof Object){
         this.current_user = <IUser>data;
       }
      }))
      .subscribe()

  }

  update_currentUser(first_name: string, last_name: string){
    this.current_user.first_name = first_name;
    this.current_user.last_name = last_name;

    let options = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.put(`/api/users/${this.current_user.id}`, this.current_user, options)

  }

  logout(){
    this.current_user = undefined;

    let options = { headers : new HttpHeaders({'Content-Type' : 'application/json'})}
    return this.http.post('/api/logout', {}, options)
  }

}
