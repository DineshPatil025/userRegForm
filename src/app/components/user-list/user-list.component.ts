import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

usersArr !:Array<Iusers>

  constructor(
    private _userService:UsersService
  ) { }

  ngOnInit(): void {
    this.usersArr = this._userService.getAllUsers()
    console.log(this.usersArr);


    // this._userService.newUserSubjectAsObs$.subscribe((res:any) => {
    //   this.usersArr.push(res)
    // })
    
  }

}
