import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { IEvent } from '../shared';
import { EventsService } from '../shared/events.service';


@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:IEvent;

  constructor(private event_service: EventsService,
     private toastr: ToastrService,
     private route : ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']

  }

  handle_thumbnailClick(event_name){
    this.toastr.success(event_name)
  }

}
