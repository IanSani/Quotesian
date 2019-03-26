import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikeThroughDirective } from './strike-through.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    DateCountPipe,
    StrikeThroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
