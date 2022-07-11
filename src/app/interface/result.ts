export interface User {
  avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
}

export interface UserInformation {
  summary: string;
  image: any;
  dishTypes:any
  title: string;
  diets: any;
  cuisines: any;
  extendedIngredients: any;
  sourceName:string;
  glutenFree:string;
  pricePerServing:number
  readyInMinutes:number
}