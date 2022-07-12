import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { HttpClient } from '@angular/common/http';

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
  show = false;
  searchResults=[]
  timeout: any =null
  open() {
    this.show = true
}
clear() {
  this.searchedKeyword = ''
}
  hide() {
    this.show = false
  }
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(
    private http: HttpClient,
    private service: DataserviceService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  fetchResults(symbol:any) {
    if (!symbol) this.hide();
    this.http.get<any>(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${symbol}&apiKey=${this.service.apiKey}`).subscribe(data =>{
      console.log(data)
      this.searchResults = data;
    })
  }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.service.getRecipe().subscribe((data: any) => {
      this.datasource.data = data.results;
      this.searchDropdown = data.results;
      this.searchResults =data.results;
      this.obs = this.datasource.connect();
      // console.log(this.searchDropdown)
    });
    this.datasource.paginator = this.paginator;
    // this.fetchResults(this.searchedKeyword)
  }


  searchFunc(val:any){
    this.searchedKeyword=val;
    console.log(val);
    if(val != ''){
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.show = true

        this.fetchResults(this.searchedKeyword)

      }, 500);
  } else {
    this.obs;
    // this.hide();
  }
}
}
