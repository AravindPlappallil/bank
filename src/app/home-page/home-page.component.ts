import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userName: any
  acno: any
  Dacno:any
  balance: any
  userDetails: any
  userBalance: any
  detailsName:any
  detailsAcno:any
  toAcno:any
  amount:any
  psw:any
  data:any
  date:any
  transactionStatus:any
  tStatus:any

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder, private datepipe:DatePipe) { }

  // money transaction form
  moneyTransferForm = this.fb.group({
    toAcno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

    if (!localStorage.getItem("currentAcno")) {
      this.router.navigateByUrl("")
      alert("please login fisrt")
    }
    this.userName = localStorage.getItem("currentUser")
    // console.log(this.userName1);

  }

  logout() {
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")

  }

  getBalance() {
    this.acno = localStorage.getItem("currentAcno")
    this.ds.balanceApi(this.acno).subscribe((result: any) => {
      this.balance = result.message
      // console.log(this.balance);

    })
  }

  getDetails() {
    this.acno = localStorage.getItem("currentAcno")
    this.ds.getUserApi(this.acno).subscribe((result: any) => {
      this.userDetails = result.message
      this.detailsName=result.message.uname
      this.detailsAcno=result.message.acno

      // console.log(this.userDetails);

    })
  }

  // sent money
  fundTransferss(){
    if(this.moneyTransferForm.valid){
      this.date= new Date()
      let latestDate = this.datepipe.transform(this.date,'short');
      console.log(latestDate);

      this.acno=localStorage.getItem("currentAcno")

      let toAcno=this.moneyTransferForm.value.toAcno
      let amount=this.moneyTransferForm.value.amount
      let psw=this.moneyTransferForm.value.psw

      if(this.acno==toAcno){    // checking if the A/c no is same
          this.transactionStatus="from and to A/c numbers are same"
      }
      else{

      this.ds.fundTransfer(toAcno,this.acno,amount,psw,latestDate).subscribe(
        (result:any)=>{
          console.log(result.message);
          this.transactionStatus=result.message+"!"
          this.tStatus=true
          
        },
        result=>{
          console.log(result.error.message);
          this.transactionStatus=result.error.message
          this.tStatus=false
          
        }
        )
      }
    }
    else{
      this.transactionStatus="Invalid Form !"
      this.tStatus=false
    }
  

  }

  deleteClick(){
    this.Dacno=localStorage.getItem("currentAcno")
  }

noDelete(){
  this.Dacno=""
}

yesDelete(event:any){
  this.ds.deleteAccount(event).subscribe((result:any)=>{
    alert(result.message)
    this.logout()
  })
}


}
