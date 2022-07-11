import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, filter, Observable, of } from 'rxjs';
import { UserInformation } from './interface/result';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  apiKey='e5bc6655f2d34025b055d1013ac2fe6e'
  
  constructor(private http: HttpClient) { }
  
  url_ ="https://api.spoonacular.com/recipes"
  cuisine ='';
  users:any= []
  id!: number
  getRecipe(){
    // this.cuisine = data;
    console.log(this.cuisine);
    return this.http.get(`${this.url_}/complexSearch?apiKey=${this.apiKey}&cuisine=${this.cuisine}&number=60`);
    
    // return this.http.get(this.url_)
  }
  
  getSingleView(id: number): Observable<UserInformation> {
    let queryParams = new HttpParams();
    return this.http.get<UserInformation>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`,{ params: queryParams });
    
  }
  
}

// apikey=e5bc6655f2d34025b055d1013ac2fe6e
// apikey=ee0e1926a7e94aab8b79ed6043952ab8
//apikey=36c5c6a85a62403db939eaec9d47
/// ddf18f7264e0431d93e8539df9295884

//