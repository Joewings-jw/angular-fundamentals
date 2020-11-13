import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { EventsService } from '../shared/events.service';
@Injectable({
    providedIn: 'root'
})

export class EventListResolver implements Resolve<any>{
    constructor(private event_service: EventsService){}

    resolve(){
        return this.event_service.get_events()
    }
}

//the goal here is to return an abservable not the data hence map operator was used
//instead of subscribe
//pipe used because we are resolving from not an actual api

//we are calling the get_events() method to get the observable and using map we get to 
//access the stream of the data 
//subscribe returns a subscription not an observable