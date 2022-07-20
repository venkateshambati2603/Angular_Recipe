import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'recipe', component: RecipeComponent},
  {path:'view/:id', component:ViewComponent},
  {path: 'forms', component:FormsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
