import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() formGroupName: string
  form: FormGroup
  @ViewChild('stepper') stepper: MatStepper
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form =this.rootformGroup.control.get(this.formGroupName) as FormGroup;
    console.log(this.form)
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
}
