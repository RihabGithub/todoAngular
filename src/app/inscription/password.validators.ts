import { AbstractControl } from '@angular/forms' ;
export class PasswordValidators {

    static passwordShouldMatch(control: AbstractControl){
        let password = control.get('password');
        let repassword = control.get('confirmPassword')
        if(password.valid != repassword.value){
            return{ passwordShouldMatch:true

            };
        }
        return false;
    }
}