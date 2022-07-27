import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() formGroupName: string
  form: FormGroup
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form =this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

}
