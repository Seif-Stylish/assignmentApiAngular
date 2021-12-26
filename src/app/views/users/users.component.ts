import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/userInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  getUsers()
  {
    this.userService.getUsers().subscribe(
      {
        next:(res: any)=>
        {
          this.users = res;
          console.log(this.users);
        },
        error:(httpError: any)=>
        {
          this.users = httpError;
          console.log(this.users)
        }
      }
    )
  }

  ngOnInit(): void {

    this.getUsers()

  }

}
