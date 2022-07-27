import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  @Input() formGroupName: string
  form: FormGroup
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form=this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

}
