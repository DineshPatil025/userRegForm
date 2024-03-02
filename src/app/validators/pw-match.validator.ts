import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";




export const pwMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    let pw = control.get('pw')?.value
    let cpw = control.get('cpw')?.value


    if (pw !== cpw) {
        return { pwMatchError: true }
    }
    return null
}