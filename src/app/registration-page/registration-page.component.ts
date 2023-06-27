import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isValidObjectId } from 'mongoose';
import { DataService } from '../service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {

  // accno:any
  // usname:any
  // pasw:any

  pswCheck: any = false

  constructor(private fb: FormBuilder, private ds: DataService, private router:Router) { }
  // model form
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }
  register() {
    // console.log(this.accno,this.usname,this.pasw);
    // console.log(this.registerForm.value.acno);

    if (this.registerForm.valid) {
      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {

        this.ds.registerApi(
          this.registerForm.value.acno,
          this.registerForm.value.uname,
          this.registerForm.value.psw
        ).subscribe((result: any) => {
          alert(result.message)
          this.router.navigateByUrl("")

        },
          result => {
            alert(result.error.message);
          }
        )
          

      }
      else {
        // alert("password doesnt match")
        this.pswCheck = true
      }

    }
    else {
      alert("invalid form")
    }

  }
}
