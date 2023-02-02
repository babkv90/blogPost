import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BlogContentServiceService } from '../blog-content-service.service';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrls: ['./dashboard-module.component.css']
})
export class DashboardModuleComponent implements OnInit {
  // @ViewChild('codeSnippet') codeSnippet!: ElementRef;
  @ViewChild('textarea', { static: false }) textarea!: ElementRef;

  blogpostForm: FormGroup;
  testname='Abinash';
  constructor(private fb: FormBuilder,public bdservice :BlogContentServiceService,private router:Router,private renderer: Renderer2) { 
    this.blogpostForm = this.fb.group({
      HeaderTitle: '',
      paragraph: this.fb.array([]) ,
    });
  
  }

  ngOnInit(): void {
    this.getData();
  }


     
  ngAfterViewInit() {
  
    if(this.textarea){
      this.renderer.setStyle(this.textarea.nativeElement, 'height', 'auto');
      this.renderer.setStyle(this.textarea.nativeElement, 'height', `${this.textarea.nativeElement.scrollHeight}px`);
    }

  }

  blogContentSchema:any=[]

  getData(){
    // return this.bdservice.blogContentData;
  var that = this ;
   var dataFromPromise = new Promise((resolve, reject) => {
      that.bdservice.getData().subscribe((blogData)=>{
        that.blogContentSchema =blogData;
        resolve(blogData);
      })
    })

    dataFromPromise.then((d:any)=>{
      that.receivedData=d[0];
      console.log(that.receivedData);
    })
    // this.bdservice.getData().subscribe((blogData)=>{
    
    //   this.blogContentSchema =blogData;
    //   this.receiveData=this.blogContentSchema[0];
    // });
  }

  receivedData: any={};

  receiveData(data: any) {
    this.receivedData = data;
    console.log(this.receivedData);
  }
  
  // copyCode(a:any) {
  //   if (this.codeSnippet) {
  //     // Copy the code
  //     navigator.clipboard.writeText(this.codeSnippet.nativeElement.textContent);
  //   } else {
  //     console.log("Code Snippet not found");
  //   }
  // }

   
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
    console.log(this.paragraphs);
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


  adjustHeight() {
    this.renderer.setStyle(this.textarea.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.textarea.nativeElement, 'height', `${this.textarea.nativeElement.scrollHeight}px`);
  }
 

}

