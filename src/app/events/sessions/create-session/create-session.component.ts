import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from '../../shared';
import { restricted_words} from '../../shared/custom-validator'
 
@Component({
  selector:'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() save_newSession = new EventEmitter()
  @Output() cancel_addSession = new EventEmitter()
  new_sessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400), restricted_words(['Admin', 'foo'])])

    
    this.new_sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  
  }
      

  save_session(form_values){
    let session:ISession = {
      id: undefined,
      name:form_values.name,
      duration: form_values.duration,
      level: form_values.level,
      presenter: form_values.presenter,
      abstract: form_values.abstract,
      voters: []
    }
   
    this.save_newSession.emit(session)
  }

  cancel(){
    this.cancel_addSession.emit()
  }

}
