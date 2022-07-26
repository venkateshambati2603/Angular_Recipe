import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlDirective, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;

  }  

}
