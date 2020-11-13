import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
 
import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  LocationValidator
} from './events/index'

import { NavbarComponent } from './nav/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { Error404Component } from './errors/404-component';
import { UserModule } from "./user/user-module/user.module";
import { TOASTR_TOKEN, Toastr,
   JQ_TOKEN,
   CollapsibleWellComponent,
  SimpleModalComponent,
  DurationPipe,
ModalTriggerDirective } from './common/index';




let toastr: Toastr = window['toastr']
let jQuery = window['$']
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
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    DurationPipe,
    LocationValidator,
   
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    UserModule,
    HttpClientModule
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
