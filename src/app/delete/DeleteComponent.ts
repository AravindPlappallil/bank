import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  [x: string]: any;
  // variable to stor incoming data from parent
  @Input() childAcno: string | undefined
  // event creation
  // event name
  @Output() onCanacle=new EventEmitter()
  @Output() onDelete= new EventEmitter()
  constructor(){}

  ngOnInit(): void {
    
  }
  cancleDelete(){
    this.onCanacle.emit()
  }

  deleteConf(){
    this.onDelete.emit(this.childAcno)
  }

 
}
