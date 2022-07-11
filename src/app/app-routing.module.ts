import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'recipe', component: RecipeComponent},
  {path:'view/:id', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
