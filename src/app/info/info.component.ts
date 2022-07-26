import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  // @Input() formGroupName!: string
  form: FormGroup
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form =this.rootformGroup.control;
    // console.log(this.form)
  }

}
