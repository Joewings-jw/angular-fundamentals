import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../shared';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event:any;
  add_mode: boolean
  filter_by:string = 'all'
  sort_by: string = 'name'

  constructor(private event_service: EventsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach(data=> { 
      this.event = data['event'];
      this.add_mode = false;
      
    })
    // this piece of code could have been used on ngOnInit but the eventsResolver has 
    // already resolved the params of the ActivatedRoute 
    //   this.router.params.forEach((params: Params)=> {
    //   this.event = this.router.snapshot.data['event'];
     
    
  }

  add_session(){
    this.add_mode = true
  }

  save_session(session: ISession){
    console.log(session)
    const next_id = Math.max.apply(null, this.event.sessions.map(s=>s.id));
    session.id = next_id + 1;
    this.event.sessions.push(session);
    this.event_service.save_event(this.event).subscribe()
    this.add_mode = false;

  }

  cancel_session(){
    this.add_mode = false 
  }

}
