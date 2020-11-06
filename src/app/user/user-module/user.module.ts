import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';


const user_routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(user_routes)
  ],
  exports: [ProfileComponent, LoginComponent
  ]
})
export class UserModule { }
