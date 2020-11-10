import { Directive, OnInit, Inject, ElementRef, Input} from '@angular/core'
import { JQ_TOKEN } from './jQuery.services';

@Directive({
    selector:"[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement
    @Input('modal-trigger') modal_id: string

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
        this.el = ref.nativeElement
    }

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            this.$(`#${this.modal_id}`).modal({})
        })
        
    }

}