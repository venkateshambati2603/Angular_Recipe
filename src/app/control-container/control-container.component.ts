import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-control-container',
  templateUrl: './control-container.component.html',
  styleUrls: ['./control-container.component.css']
})
export class ControlContainerComponent implements OnInit {

  resultInfo: any;
  isLinear=true
  res;
  pinCode =[];
  pin;
  userForm: FormGroup;
  constructor(private fb: FormBuilder,
    private service: DataserviceService) { }

  ngOnInit(): void {

    


    this.userForm = this.fb.group({
      info:this.fb.group({
        firtName:['',
        [Validators.required]
      ],
        lastName:['',
        [Validators.required]],
        maidenName:['',
        [Validators.required]],
        email:['',
        [Validators.required,Validators.email]],
        age:['',
        [Validators.required,Validators.pattern("[0-9]{2}")]],
        phone:['',
        [Validators.required,Validators.pattern("[0-9]{10}")]],
        gender:['',
        [Validators.required]],
        birthDate:['',
        [Validators.required]]
      }),
      address: this.fb.group({
        addresss:['',
        [Validators.required]],
        city:['',
        [Validators.required]],
        coordinates:['',
        [Validators.required]],
        postalCode:new FormControl('',
        {validators: this.pinCodeValidator('pincode')}
        ),
        state:['',
        [Validators.required]],
      }),
      bank:this.fb.group({
        cardExpire:['',
        [Validators.required]],
        cardNumber:['',
        [Validators.required]],
        cardType:['',
        [Validators.required]],
        currency:['',
        [Validators.required]],
        iban:['',
        [Validators.required]]
      }),
      company:this.fb.group({
        name:['',
        [Validators.required]],
        title:['',
        [Validators.required]],
        addresss:['',
        [Validators.required]],
        city:['',
        [Validators.required]],
        postalCode:['',
        [Validators.required]],
        state:['',
        [Validators.required]],
        department:['',
        [Validators.required]],
      })
    })
  }
  private pinCodeValidator(pincode: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      this.pin = this.service.getPinCode(this.res).subscribe((data:any)=>{
        this.pinCode=data.result[0].postalCode
        console.log(this.pinCode)
      })
      // const val= this.pinCode
      // const confirmPass = formGroup.get(confirmPassword)?.value

      if(this.pin){
        return null;
    } else{
      return {"invalidZip":true};
    }
    }
  }
  // pinCoderValidator(){
  //  this.pin= this.service.getPinCode(this.res).subscribe((data:any)=>{
  //     console.log(data)
  //     this.pinCode=data.result[0].postalCode
  //     if(this.pin){
  //       return null;
  //   } else{
  //     return {"invalidZip":true};
  //   }
  //   })
  // }
 
  onClick(){
    this.resultInfo=this.userForm.value
    alert('Do you want to submit the form?')
  }
  reset(){
    this.userForm.reset()
  }
  }
