import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
 selector: 'app-quote',
 templateUrl: './quotes.component.html',
 styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

 quotes = [
   new Quote(1, 'Things change. And friends leave. Life does not stop for anybody', 'Stephen chibosky', new Date(2019, 1, 18)),
   new Quote(2, 'Education is the most powerful weapon which you can use to change the world', 'Nelson Mandela', new Date(2019, 0, 7)),
   new Quote(3, 'Nurture your mind with great thoughts. To believe in the heroic makes heroes.', 'Benjamin Disrael', new Date(2019, 6, 26)),
   new Quote(4, 'When I let go of what I am, I become what I might be', 'Jantrix Jane', new Date(2019, 7, 27)),
   new Quote(5, 'Luck is a dividend of sweat. The more you sweat, the luckier you get.', 'Barbra Gee', new Date(2019, 12, 18)),
   new Quote(6, 'Those who cannot change their minds cannot change anything', 'George Benard shaw', new Date(2019, 6, 23)),
 ]
 deleteQuote(isComplete, index) {
   if (isComplete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

     if (toDelete) {
       this.quotes.splice(index, 1);
     }
   }
 }

 toogleDetails(index) {
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength + 1;
   quote.completeDate =new Date (quote.completeDate)
   this.quotes.push(quote)
 }


 constructor() { }
 ngOnInit() {
 }

}
