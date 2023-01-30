import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogContentServiceService } from '../blog-content-service.service';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrls: ['./dashboard-module.component.css']
})
export class DashboardModuleComponent implements OnInit {
  @ViewChild('codeSnippet') codeSnippet!: ElementRef;

  blogpostForm: FormGroup;
  testname='Abinash';
  constructor(private fb: FormBuilder,public bdservice :BlogContentServiceService,private router:Router) { 
    this.blogpostForm = this.fb.group({
      HeaderTitle: '',
      paragraph: this.fb.array([]) ,
    });
  
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.testname = 'kumar'
    },5000)
    this.blogContentSchema =this.getData();
    console.log("called");
  }

  blogContentSchema:any=[];

  getData(){
    // return this.bdservice.blogContentData;
    this.bdservice.getData().subscribe((blogData)=>{
      console.log(blogData);
    });
  }
  
  copyCode(a:any) {
    if (this.codeSnippet) {
      // Copy the code
      navigator.clipboard.writeText(this.codeSnippet.nativeElement.textContent);
    } else {
      console.log("Code Snippet not found");
    }
  }

   
  get paragraphs() : FormArray {
    return this.blogpostForm.controls["paragraph"] as FormArray
  }
 
  newblock(): FormGroup {
    return this.fb.group({
      contentType: '',
      content: '',
    })
  }
 
  addSkills() {
    this.paragraphs.push(this.newblock());
  }
 
  removeSkill(i:number) {
    this.paragraphs.removeAt(i);
  }
 
  onSubmit() {
    // console.log(this.blogpostForm.value)
    // this.blogContentSchema.push(this.blogpostForm.value);
  
  }


  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

 

}

