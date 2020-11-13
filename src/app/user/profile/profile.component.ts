import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TOASTR_TOKEN, Toastr} from '../../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_form:FormGroup
  private first_name:FormControl
  private last_name: FormControl

  constructor(private auth:AuthService,
     public router: Router,
     @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.first_name = new FormControl(this.auth.current_user.first_name, Validators.required)
    this.last_name = new FormControl(this.auth.current_user.last_name, Validators.required)
    this.profile_form = new FormGroup({
      first_name: this.first_name,
      last_name:this.last_name
    })
  }

  save_profile(form_values){
    if(this.profile_form.valid){
      this.auth.update_currentUser(form_values.first_name, form_values.last_name)
       .subscribe(()=>{
        this.toastr.success('Profile saved')
       })
      
    }
   
  }

  logout(){
    this.auth.logout().subscribe(()=> {
      this.router.navigate(['/user/login'])
    })
  }
  validate_firstName(){
    return this.first_name.valid || this.first_name.untouched
  }

  validate_lastName(){
    return this.last_name.valid || this.last_name.untouched
  }

  cancel(){
    this.router.navigate(['events'])
  }

}
