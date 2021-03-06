import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {//controller

  title: string = 'Userform';
  user: User = new User();//model-stores all form data
  userArray: any;

  constructor(private userService: UserService) { }
  save() {
    const observable = this.userService.save(this.user);
    observable.subscribe(response => { //success function
      console.log(response);
      this.user.id = response;
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
      // this.user = new this.user();
    },
      error => {//error function
        console.log(error);
        alert('error happenned..')
      })
  }
  deleteUser(id: number, index: number) {
    const observable = this.userService.delete(id);
    alert("Deleted one record....");
    observable.subscribe(response => this.userArray.splice(index, 1))
  }

  // searchByName(){
  //   // const onameValue = document.getElementById("name").value ? null:'';
  //   // const observable = this.userService.searchByName(nameValue);

  // }


  ngOnInit(): void {
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {
      console.log(response);
      this.userArray = response;
    });
  }
}
