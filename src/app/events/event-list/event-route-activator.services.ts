import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventsService } from '../shared/events.service'

@Injectable({
    providedIn: 'root'
})

export class EventRouteActivator implements CanActivate {
    constructor(private event_service: EventsService, private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const event_exist = !!this.event_service.get_event(+route.params['id'])

        if(!event_exist){
            this.router.navigate(['/404'])
        }
        return event_exist

    }

}