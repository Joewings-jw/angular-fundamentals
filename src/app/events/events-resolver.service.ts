import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { EventsService } from './shared/events.service';
@Injectable({
    providedIn: 'root'
})

export class EventsResolver implements Resolve<any>{
    constructor(private event_service: EventsService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.event_service.get_event(route.params['id'])
    }
}