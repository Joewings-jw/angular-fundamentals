import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from '../jQuery.services'

@Component({
    selector:"simple-modal",
    templateUrl: './simple-modal.component.html',
    styleUrls: ['./simple-modal.component.css']
})

export class SimpleModalComponent {
    @Input() title: string
    @Input() element_id: string
    @Input() closeOnBodyClick: string
    @ViewChild('modal_container') container_el : ElementRef;
    

    constructor(@Inject(JQ_TOKEN) private $: any){

    }

    close_modal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() === 'true'){
            this.$(this.container_el.nativeElement).modal('hide')
        }
       
    }
    
}