import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
 
  constructor() { 
  
  }

  ngOnInit() {
    this.name = "John Doe";
    this.age = 30;
    this.email = "test@gmail.com"
    this.address = {
      street: 'test',
      city: 'fama',
      state: "braga"
    }
    this.hobbies = ["Test1", "Test2"];
    this.hello = "hello";
  }

  onClick() {
    this.name = "Tiago Silva";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby); //beginning of the array
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }
}


interface Address {
  street:string,
  city:string,
  state:string
}
