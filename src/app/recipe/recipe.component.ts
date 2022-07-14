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
  searchedKeyword:string='';
  p: number = 1;
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();
  obs!: Observable<any>;
  searchDropdown: any;
  show = false;
  searchResults=[]
  // timeout: any =null
  // cuisine:any
  res!: any;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(
    private http: HttpClient,
    private service: DataserviceService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  fetchResults(symbol:string) {
    // if (!symbol) this.hide();
    this.http.get<any>(`${this.service.url_}/complexSearch?apiKey=${this.service.apiKey}&number=10&query=${symbol}`).subscribe(data =>{
      this.searchResults = data.results;
      this.searchDropdown = data.results;
      console.log(this.searchDropdown)
    })
  }
 
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.service.getRecipe(this.res).subscribe((data:any) => {
      this.datasource.data = data.results;
      
      this.searchResults =data.results;
      this.obs = this.datasource.connect();
      // console.log(this.searchDropdown)
    });
    // this.fetchResults(this.searchedKeyword)
    this.datasource.paginator = this.paginator;
  }
  
  searchFunc(val:string){
    this.searchedKeyword=val;
    this.fetchResults(this.searchedKeyword)
}
}
