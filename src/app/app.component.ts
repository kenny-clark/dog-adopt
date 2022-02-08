import { Component } from '@angular/core';
import { DogCardModel } from './cards/dog-cards.model';
import { mock_dogcards_list } from './cards/mock_dogcards_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog-adopt';
  dogCards1: DogCardModel [] = [];

  constructor(){

    for(var dog of mock_dogcards_list){
      console.log(dog);
      this.dogCards1.push(dog);
    }
  }
}
