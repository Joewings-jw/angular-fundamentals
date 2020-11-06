import { FormControl } from '@angular/forms'


export function restricted_words(words) {
    return (control: FormControl): {[key: string]: any} => {
        if(!words) return null
        var invalid_words = words.map(w=>control.value.includes(w) ? w : null).
        filter(w=>w != null)
        return invalid_words && invalid_words.length > 0 ? 
        {'restricted words' : invalid_words.join(', ')} : null
    }

}
    
  