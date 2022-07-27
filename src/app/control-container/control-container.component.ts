import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  userForm: FormGroup;
  constructor(private fb: FormBuilder,
    private service:DataserviceService) { }

  ngOnInit(): void {
    // this.service.onClick(this.res).subscribe((data:any)=>{
    //   this.resultInfo
    // })
    console.log(this.resultInfo)
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
        postalCode:['',
        [Validators.required]],
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

 
  onClick(){
    this.resultInfo=this.userForm.value
    // console.log(this.resultInfo)
    // this.userForm.reset();
  }
  reset(){
    this.userForm.reset()
  }
  }
