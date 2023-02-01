import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  blogContentSchema:any=[
    {
        "_id": "63da25f02a98416b9bb64140",
        "HeaderTitle": "Bind Textarea with eventListner in Angular ",
        "paragraph": [
            {
                "contentType": "Article",
                "content": "In Angular, you can bind the addEventListener method to a textarea in a component's template as follows:",
                "_id": "63da25f02a98416b9bb64141"
            },
            {
                "contentType": "code",
                "content": "<textarea #textarea (keyup)=\"onKeyUp(textarea.value)\"></textarea>\n",
                "_id": "63da25f02a98416b9bb64142"
            },
            {
                "contentType": "Article",
                "content": "In the component class, you can define the onKeyUp method to listen to the keyup event and get the updated value of the textarea:",
                "_id": "63da25f02a98416b9bb64143"
            },
            {
                "contentType": "code",
                "content": "import { Component, ViewChild, ElementRef } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <textarea #textarea (keyup)=\"onKeyUp(textarea.value)\"></textarea>\n  `\n})\nexport class AppComponent {\n  @ViewChild('textarea', { static: true }) textarea: ElementRef;\n\n  onKeyUp(value: string) {\n    console.log(value);\n  }\n}\n",
                "_id": "63da25f02a98416b9bb64144"
            }
        ],
        "__v": 0
    }
];

  getData(){
    // return this.bdservice.blogContentData;
    this.bdservice.getData().subscribe((blogData)=>{
      console.log(blogData);
      this.blogContentSchema =blogData
    });
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

