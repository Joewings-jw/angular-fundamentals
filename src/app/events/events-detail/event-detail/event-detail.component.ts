import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../../shared';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event:any;
  add_mode: boolean

  constructor(private event_service: EventsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.event_service.get_event(
      +this.router.snapshot.params['id']
    )
  }

  add_session(){
    this.add_mode = true
  }

  save_session(session: ISession){
    console.log(session)
    const next_id = Math.max.apply(null, this.event.sessions.map(s=>s.id));
    session.id = next_id + 1;
    this.event.sessions.push(session);
    this.event_service.update_event(this.event);
    this.add_mode = false;

  }

  cancel_session(){
    this.add_mode = false 
  }

}
