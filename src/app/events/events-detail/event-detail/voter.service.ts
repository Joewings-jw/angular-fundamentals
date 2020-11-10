import { Injectable } from '@angular/core'
import { ISession } from '../../shared';

@Injectable({
    providedIn:'root'
})

export class VoterService {

    delete_voter(session: ISession, voter_name: string){
        session.voters = session.voters.filter(voter=> voter !== voter_name)
    }

    add_voter(session: ISession, voter_name: string){
        session.voters.push(voter_name)
    }

    user_hasVoted(session: ISession, voter_name: string){
        return session.voters.some(voter=> voter === voter_name)
    }

}