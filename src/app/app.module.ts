import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';
import { RequestInterceptor } from './request.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsComponent } from './forms/forms.component';
import { ContactComponent } from './contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';
import { BankComponent } from './bank/bank.component';
import { CompanyComponent } from './company/company.component';
import { ControlContainerComponent } from './control-container/control-container.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    RecipeComponent,
    LoaderComponent,
    FormsComponent,
    ContactComponent,
    AddressComponent,
    ContactComponent,
    BankComponent,
    InfoComponent,
    CompanyComponent,
    ControlContainerComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  },{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
