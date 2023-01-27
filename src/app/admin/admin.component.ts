import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BlogContentServiceService } from '../blog-content-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
   
  title = 'FormArray Example in Angular Reactive forms';
 
  blogpostForm: FormGroup;
  constructor(private fb: FormBuilder,public bdservice :BlogContentServiceService) { 
    this.blogpostForm = this.fb.group({
      Header: '',
      paragraphs: this.fb.array([
     
      ]) ,
    });
  
  }

  ngOnInit(): void {
      // console.log("this.form",this.form.get('paragraphs'));
  }

  
  get paragraphs() : FormArray {
    return this.blogpostForm.controls["paragraphs"] as FormArray
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
    console.log(this.blogpostForm.value);
    this.bdservice.blogContentData.push(this.blogpostForm.value);
  }


 
}


