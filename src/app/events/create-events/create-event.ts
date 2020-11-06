import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EventsService } from '../shared';


@Component({
    templateUrl:"create-event.component.html",
    styles:[`em {
        float:right;
        color:#E05C65;
    }
    .error input {
        background-color:#E3C3C5;
    }
    .error ::-webkit-input-placeholder{
        color: #999;
    }
    .error ::-moz-placeholder{
        color: #999;
    }
    .error:-ms-input-placeholder{
        color:#999
    }`]
})

export class CreateEventComponent {
    new_event
    is_dity:boolean = true


    constructor(private router: Router, 
        private event_service :EventsService){

    }

    ngOnInit(){
 
    }



    save_event(form_values){
        this.event_service.save_event(form_values);
        this.is_dity = false;
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }

}