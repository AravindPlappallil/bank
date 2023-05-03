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

  uname:any
  psw:any

  ngOnInit(): void {

  }

  login(a:any,b:any){
    alert("login clicked")
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
  }

  unameChange(event:any){
    console.log(event.target.value);
    
  }
}


