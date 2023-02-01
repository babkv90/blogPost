import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    console.log(this.inputData.menuTitle);
    this.content=this.inputData;

  }
  sendData(menu:any){
    console.log(menu);
    this.dataEvent.emit(menu.menuTitle);
  }

  

}
