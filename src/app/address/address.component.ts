import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() formGroupName: string
  form: FormGroup
  res;
  pinCode
  constructor(private rootformGroup: FormGroupDirective,
    private service:DataserviceService) { }

  ngOnInit(): void {
    
    this.form =this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

}
