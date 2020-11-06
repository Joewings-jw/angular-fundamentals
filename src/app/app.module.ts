import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }from '@angular/forms'
 
import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

import { NavbarComponent } from './nav/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { Error404Component } from './errors/404-component';
import { UserModule } from "./user/user-module/user.module";



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
