import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BlogContentServiceService } from '../blog-content-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'FormArray Example in Angular Reactive forms';
  

  @ViewChild('textarea', { static: false }) textarea!: ElementRef;
  blogpostForm: FormGroup;
  constructor(private fb: FormBuilder,public bdservice :BlogContentServiceService,private router: Router,private renderer: Renderer2) { 
    this.blogpostForm = this.fb.group({
      HeaderTitle: '',
      menuTitle:'',
      topic : '',
      context:'',
      paragraph: this.fb.array([
      ]) ,
    });
 
  }

  ngOnInit(): void {
      // console.log("this.form",this.form.get('paragraphs'));
      
  }
   
  ngAfterViewInit() {
    if(this.textarea){
      this.renderer.setStyle(this.textarea.nativeElement, 'height', 'auto');
      this.renderer.setStyle(this.textarea.nativeElement, 'height', `${this.textarea.nativeElement.scrollHeight}px`);
  
    }
  
  }

  
  blogContentSchema:any=[];

  // getData(){
  //   return this.bdservice.blogContentData;
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
  }
 
  removeSkill(i:number) {
    this.paragraphs.removeAt(i);
  }
 
  onSubmit() {
    // console.log(this.blogpostForm.value)
    // this.blogContentSchema.push(this.blogpostForm.value);
    // this.bdservice.blogContentData.push(this.blogpostForm.value);
    this.blogpostForm.value.topic = this.blogpostForm.value.topic.toUpperCase();
    console.log(this.blogpostForm.value);
    this.bdservice.saveData(this.blogpostForm.value).subscribe((blogData)=>{
      console.log(blogData);
      this.router.navigate(['']);
    });
   
  }


  adjustHeight() {
    this.renderer.setStyle(this.textarea.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.textarea.nativeElement, 'height', `${this.textarea.nativeElement.scrollHeight}px`);
  }

 
}


