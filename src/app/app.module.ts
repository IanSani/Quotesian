import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikeThroughDirective } from './strike-through.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteDetailsComponent,
    QuotesComponent,
    DateCountPipe,
    StrikeThroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
