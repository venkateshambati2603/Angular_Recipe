import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, filter, Observable, of } from 'rxjs';
import { UserInformation } from './interface/result';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  apiKey='121c6b7975c44528b4b6969e713ee8a0'
  searchResults: any;
  
  constructor(private http: HttpClient) { }
  
  url_ ="https://api.spoonacular.com/recipes"
  cuisine ='';
  searchData:any= []
  id!: number
  res!:string
  
  getRecipe(res:any){
    // this.cuisine = data;
    console.log(this.cuisine);
    return this.http.get(`${this.url_}/complexSearch?apiKey=${this.apiKey}&number=100`);
    
    // return this.http.get(this.url_)
  }
  
  getSingleView(id: number): Observable<UserInformation> {
    let queryParams = new HttpParams();
    return this.http.get<UserInformation>(`${this.url_}/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`,{ params: queryParams });
     
  }
  // fetchResults(symbol:any) {
  //   // if (!symbol) this.hide();
  //   this.http.get<any>(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${symbol}&apiKey=${this.apiKey}`).subscribe(data =>{
  //     this.searchResults = data;
  //     console.log(this.searchResults)
  //   })
  // }
}

// apikey=e5bc6655f2d34025b055d1013ac2fe6e
// apikey=ee0e1926a7e94aab8b79ed6043952ab8
//apikey=36c5c6a85a62403db939eaec9d47
/// ddf18f7264e0431d93e8539df9295884
//