import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup;
  result;
  constructor(    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm(){
    this.form = this.fb.group(
      {
        'fName': new FormControl('',[Validators.required,Validators.minLength(5)]),
        'lName':  new FormControl('',Validators.required),
        addresses: this.addressForm(),
        contacts: this.fb.array([this.contactFrom()])
      }
    );
  }

  addressForm(){
    return this.fb.group(
      {
        'address1': new FormControl('',Validators.required),
        address2: [null],
        country: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required)
      }
    )
  }

  get addresses(){
  return this.form.get("addresses") as FormGroup;
  }
  
  get contacts(){
    return this.form.get("contacts") as FormArray;
    }

  contactFrom(){
    return this.fb.group(
      {
        phone: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
        email: new FormControl('',[Validators.required,Validators.email])
      }
    );
  }

  onSave(){
    console.log(this.form.getRawValue())
    this.result = this.form.getRawValue();
    this.form.reset()
  }

  addNewContacts(){
    this.contacts.push(this.contactFrom());
    console.log(this.contacts)
  }

  removeContact(i: number){
    this.contacts.removeAt(i);
  }
}
