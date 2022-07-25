import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  constructor(private formBuild: FormBuilder,
    private route:Router) { }

  reactiveForm: FormGroup;
  result: any;
  myForm: FormGroup
  form:[]
  storedUser: any;

  ngOnInit(): void {
    this.myForm = this.formBuild.group({
      password: this.formBuild.control(null),
      confirmPassword: this.formBuild.control(null),
    }, {
      validators: this.passwordMatch('password', 'confirmPassword')
    })

 
    this.reactiveForm =this.formBuild.group({
      'name': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]), 
      'desc': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'users': new FormArray([
        new FormControl(''),
        
      ])
    })
  }
  
  private passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      const pass = formGroup.get(password)?.value
      const confirmPass = formGroup.get(confirmPassword)?.value

      if (pass === confirmPass) {
        return null
      } else {
        return { valuesDoNotMatch: true }
      }


    }
  }


  get users(){
    return this.reactiveForm.get("users") as FormArray;
    }

  addSkill(){
    // console.log(this.reactiveForm.value)
    // console.log(this.reactiveForm.get('name')?.value)
    (<FormArray>this.reactiveForm.get('users')).push(new FormControl('') )
  }
  onSubmit(){
    console.log(this.reactiveForm.value);
    this.result = this.reactiveForm.value
    this.storedUser = this.reactiveForm.get('users').value;
    console.log(this.storedUser)
    // localStorage.setItem('data',JSON.stringify(this.reactiveForm))
    this.reactiveForm.reset();
  }

  gotosection(musicians:any){
    this.route.navigateByUrl('forms#'+musicians)
  }
}
