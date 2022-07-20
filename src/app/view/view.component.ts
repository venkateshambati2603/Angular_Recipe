import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { UserInformation } from '../interface/result';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  view!:UserInformation;
  userInfo!: UserInformation;
  id!:number;

  constructor(private service:DataserviceService,
    private route: ActivatedRoute) {
      this.userInfo = {} as UserInformation;
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.service.getSingleView(this.id).subscribe((res) => {
      this.view=res
      console.log(this.view)
    });
  }
}
