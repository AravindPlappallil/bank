import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private ds:DataService) {}

  data="your perfect banking partner"

  placeholderData="User ID"

  uname:any
  psw:any
  

  ngOnInit(): void {

  }

  login(){
    console.log(this.uname,this.psw);
    
    // alert(this.ds.sdata)
    alert(this.ds.checkData())
    
  }


}


