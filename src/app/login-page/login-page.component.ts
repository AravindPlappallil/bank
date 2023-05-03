import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  data="your perfect banking partner"

  placeholderData="User ID"

  ngOnInit(): void {

  }

  login(){
    alert("login clicked")
  }

  unameChange(event:any){
    console.log(event.target.value);
    
  }
}


