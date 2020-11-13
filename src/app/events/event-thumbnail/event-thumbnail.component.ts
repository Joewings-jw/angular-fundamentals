import { Component, OnInit,Input } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit{
  @Input() event:IEvent;

  ngOnInit(){}

  time_styleclass(){
    if( this.event && this.event.time === '8:00 am'){
      return ['black', 'bold'] 
    }
    return []
  }


}
