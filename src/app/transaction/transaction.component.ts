import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  user: any
  acno: any
  date: any
  transaction: any
  searchString: any = ""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser")
    this.acno = localStorage.getItem("currentAcno")
    this.date = new Date()

    this.ds.transactionHistory(this.acno).subscribe((result: any) => {
      this.transaction = result.message
      console.log(this.transaction);

    })

  }

  filterTrans(type: any) {
    this.searchString = type
  }

  exportPdf() {
    // create an object for jspdf
    var pdf=new jsPDF()

    // set up col titles
    let col=['type','amount','date']

    // set row
    let row:any=[]

    // style
    pdf.setFontSize(16)
    pdf.text('Account statement',15,10)
    pdf.setTextColor(99)
    pdf.setFontSize(12)

    // array of object convert to array of array(nested array)
    var allitems=this.transaction
    for (let i of allitems){
      let rowdata=[i.type,i.amount,i.date]
      row.push(rowdata)
    }

    // convert nested array to psf
    (pdf as any).autoTable(col,row,{starty:15})

    // open converted pdf pdf in another tab
    pdf.output('dataurlnewwindow')

    // downlod and save
    pdf.save('accountStatement.pdf')

    // jspdf  jspodf-autotable

  }
}
