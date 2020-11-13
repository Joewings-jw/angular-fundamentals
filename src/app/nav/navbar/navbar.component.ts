import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService, IEvent, ISession } from 'src/app/events';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search_term:string = ""
  found_sessions: ISession[]
 
  

  constructor(public auth: AuthService,
    private router: Router,
    private event_service: EventsService) { }

  ngOnInit() {
  }

  search_session(search_term){
    this.event_service.search_sessions(search_term).subscribe(
      sessions => {
        this.found_sessions = sessions;
      }
    )

  }


}
