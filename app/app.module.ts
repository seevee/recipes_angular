import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RecipeDetailComponent }  from './recipe-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RecipeDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
