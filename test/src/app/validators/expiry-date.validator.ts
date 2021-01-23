import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ExpiryDateValidator {
    static mustBeGreaterThanToday(control: AbstractControl) : ValidationErrors | null {
        let val = new Date(control.value);
        let today = new Date();
        if(today.getTime() > val.getTime()){
            return {mustBeGreaterThanToday: true}
        }

        return null;
    }
}
