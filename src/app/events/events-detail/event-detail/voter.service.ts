import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../../shared';

@Injectable({
    providedIn:'root'
})

export class VoterService {

    constructor(private http: HttpClient){

    }

    delete_voter(event_id: number, session: ISession, voter_name: string){
        session.voters = session.voters.filter(voter=> voter !== voter_name)

        const url = `api/events/${event_id}/sessions/${session.id}/voters/${voter_name}`;
        this.http.delete(url)
            .pipe(catchError((this.handle_error('delete_voter'))))
            .subscribe();
    }

    add_voter(event_id: number, session: ISession, voter_name: string){
        session.voters.push(voter_name);

        let options = { headers : new HttpHeaders({'Content-Type' : 'application/json'})};
        const url = `api/events/${event_id}/sessions/${session.id}/voters/${voter_name}`;
        this.http.post(url, {}, options)
         .pipe(catchError((this.handle_error('add_voter')))).subscribe();
    
    }

    user_hasVoted(session: ISession, voter_name: string){
        return session.voters.some(voter=> voter === voter_name)
    }

    private handle_error<T>(operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.log(error);
          return of(result as T)
        }
      }

}