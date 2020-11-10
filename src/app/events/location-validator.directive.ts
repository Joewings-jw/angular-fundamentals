import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
  selector: '[validateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {

  constructor(){
    console.log('logs')
  }
  validate(formgroup: FormGroup): { [key: string ]: any } {
    let address_control = formgroup.controls['address'];
    let city_control = formgroup.controls['city'];
    let country_control = formgroup.controls['country'];
    let onlineUrl_control = (<FormGroup>formgroup.root).controls['online_url'];



    if((address_control && address_control.value && 
      city_control && city_control.value && country_control &&
      country_control.value) || (onlineUrl_control && onlineUrl_control.value) ){
        return null
      
    }else {
      return { locationValidator: false}
    }
  }


  
}
