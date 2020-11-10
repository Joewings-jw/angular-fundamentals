import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../../events-detail/event-detail/voter.service';
import { ISession } from '../../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string
  @Input() sortBy: string
  visible_sessions: ISession[]=[]


  constructor(private auth: AuthService,
    private voter_service: VoterService) { }

  ngOnChanges() {
    if(this.sessions){
      this.filter_sessions(this.filterBy);
      this.sortBy === 'name' ? this.visible_sessions.sort(name_ascending) :
        this.visible_sessions.sort(votes_descending)
    }
  }

  toggle_vote(session: ISession){
    if(this.user_hasVoted(session)){
      this.voter_service.delete_voter(session, 
        this.auth.current_user.user_name)
    }else {
      this.voter_service.add_voter(session, 
        this.auth.current_user.user_name)
    }
    if(this.sortBy === 'votes'){
      this.visible_sessions.sort(votes_descending)
    }
  }

  user_hasVoted(session: ISession){
    return this.voter_service.user_hasVoted(session, 
      this.auth.current_user.user_name)
  }

  filter_sessions(filter){
    if(filter === 'all'){
      this.visible_sessions = this.sessions.slice(0);
    }else {
      this.visible_sessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

}

function name_ascending(s1: ISession, s2: ISession):any{
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function votes_descending(s1: ISession, s2: ISession):any{
  return s2.voters.length - s1.voters.length
}
