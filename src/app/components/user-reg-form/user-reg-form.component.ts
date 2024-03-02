import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { pwMatch } from 'src/app/validators/pw-match.validator';

@Component({
  selector: 'app-user-reg-form',
  templateUrl: './user-reg-form.component.html',
  styleUrls: ['./user-reg-form.component.scss']
})
export class UserRegFormComponent implements OnInit {


  userRegForm !: FormGroup;
  isFormSubmitted: boolean = false;
  isPwVisible: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _userService : UsersService
  ) {

    this.createUserRegForm()
  }

  ngOnInit(): void {
  }


  // User Form Creation Function
  createUserRegForm() {
    this.userRegForm = this._fb.group({
      username: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-7])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      pw: [null, [Validators.required, , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cpw: [null, [Validators.required]]
    }, {

      validators: pwMatch

    }
    )
  }

  onUserRegister() {
    this.isFormSubmitted = true;

   

    if (this.userRegForm.valid) {
      this.isFormSubmitted = false

      let newUser = this.userRegForm.value
 
      this._userService.addNewUser(newUser)
      this.userRegForm.reset();

      

    } else {
      alert("Enter all details")
      this.isFormSubmitted = true
    }

  }

  pwVisible() {
    this.isPwVisible = !this.isPwVisible;

  }




  get f() {
    return this.userRegForm.controls;
  }

}
