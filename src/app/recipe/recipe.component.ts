import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  searchedKeyword = '';
  p: number = 1;
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();
  obs!: Observable<any>;
  searchDropdown: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(
    private service: DataserviceService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.service.getRecipe().subscribe((data: any) => {
      this.datasource.data = data.results;
      this.searchDropdown = data.results;
      this.obs = this.datasource.connect();
      // console.log(this.searchDropdown)
    });
    this.datasource.paginator = this.paginator;
  }
}
