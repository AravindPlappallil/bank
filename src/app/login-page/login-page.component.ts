import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private rout:Router, private fb:FormBuilder, private ds: DataService) {}

  data="your perfect banking partner"

  placeholderData="User ID"
  // model
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }

  login(){
    // console.log(this.uname,this.psw);
    if(this.loginForm.valid){
      this.ds.loginApi(this.loginForm.value.acno,this.loginForm.value.psw)
      .subscribe((result:any) =>{

        localStorage.setItem("token",JSON.stringify(result.token))
        alert(result.message)
        this.rout.navigateByUrl('home-page')
        localStorage.setItem("currentAcno",result.currentAcno)
        localStorage.setItem("currentUser",result.currentUser)
      },
        result=>{
          alert(result.error.message)
        }
      )
      // this.rout.navigateByUrl('home-page')
    }
    else{
      alert('invalid form')
    }
   
    
  }


}
