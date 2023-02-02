import { Component, EventEmitter, Input, OnInit, Output,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar-accordian',
  templateUrl: './sidebar-accordian.component.html',
  styleUrls: ['./sidebar-accordian.component.css']
})
export class SidebarAccordianComponent implements OnInit {
  @Input() inputData: any;
  @Output() dataEvent = new EventEmitter<any>();
  constructor() { }
  content:any=[];
  ngOnInit(): void {
    // console.log("",this.inputData.menuTitle);
    this.content=this.inputData;

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.inputData);
    this.content=this.inputData;
  
  }
  sendData(menu:any){
    this.dataEvent.emit(menu);
  }

  

}
