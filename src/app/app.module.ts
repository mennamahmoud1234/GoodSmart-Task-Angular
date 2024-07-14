import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }