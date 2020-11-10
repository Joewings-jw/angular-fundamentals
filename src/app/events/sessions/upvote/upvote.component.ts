import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector:'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number
    @Input()set voted(val){                      // using input setters
        this.icon_color = val ? 'red' : 'white'
    }
    @Output() vote = new EventEmitter()
    icon_color: string


    on_click(){
        this.vote.emit({});
    }

}