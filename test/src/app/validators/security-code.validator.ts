import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SecurityCodeValidator {
    static mustBeThreeDigits(control: AbstractControl) : ValidationErrors | null {
        let code = control.value;
        if(code.length !== 3 && code.length > 0){
            return {mustBeThreeDigits: true}
        }

        return null;
    }
}
