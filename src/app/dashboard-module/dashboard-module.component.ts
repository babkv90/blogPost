import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogContentServiceService } from '../blog-content-service.service';

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrls: ['./dashboard-module.component.css']
})
export class DashboardModuleComponent implements OnInit {
  @ViewChild('codeSnippet') codeSnippet!: ElementRef;

  constructor(public blogContentService:BlogContentServiceService) { }

  ngOnInit(): void {
    this.blogContentSchema =this.getData();
  }

  blogContentSchema:any=[];

  getData(){
    return this.blogContentService.blogContentData;
  }
  
  copyCode(a:any) {
    if (this.codeSnippet) {
      // Copy the code
      navigator.clipboard.writeText(this.codeSnippet.nativeElement.textContent);
    } else {
      console.log("Code Snippet not found");
    }
  }

 

}

