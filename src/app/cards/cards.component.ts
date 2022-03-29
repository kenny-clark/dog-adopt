import { Component, OnInit } from '@angular/core';
import { DogCardModel } from './dog-cards.model';
import { dogCardService } from './dog-cards.service';

@Component({
  selector: 'da-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private ps:dogCardService) { }

  ngOnInit(): void {
  }

  addCard(card: DogCardModel){
    console.log("you clicked");
    console.log(card);
    this.ps.addCard(card);
  }

}
