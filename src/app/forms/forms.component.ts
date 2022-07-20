import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  constructor(private formBuild: FormBuilder) { }

  reactiveForm: FormGroup;

  ngOnInit(): void {
 
    this.reactiveForm =this.formBuild.group({
      'name': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]), 
      'desc': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'users': new FormArray([
        new FormControl('',Validators.required),
        
      ])
    })
  }
  addName(){
    // console.log(this.reactiveForm.value)
    // console.log(this.reactiveForm.get('name')?.value)
    (<FormArray>this.reactiveForm.get('users')).push(new FormControl('',Validators.required) )
  }
  onSubmit(){
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
    localStorage.setItem('data',JSON.stringify(this.reactiveForm))
  }
}
