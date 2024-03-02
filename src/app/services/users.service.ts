import { Injectable } from '@angular/core';
import { Iusers } from '../models/users';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  usersArr: Array<Iusers> = [];


  private newUserSubject$ = new Subject()
  newUserSubjectAsObs$ = this.newUserSubject$.asObservable();
  constructor() { }


  getAllUsers() {

    if(this.usersArr){

      return this.usersArr;
    }else{
      return this.usersArr = []
    }
  }


  addNewUser(newUser: Iusers) {
    console.log(newUser);

    this.usersArr.push(newUser)
    console.log(this.usersArr);
    this.newUserSubject$.next(newUser)

  }

}
