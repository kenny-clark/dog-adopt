import { Component, OnInit} from '@angular/core';
import { DogCardModel } from './cards/dog-cards.model';
import { dogCardService } from './cards/dog-cards.service';
import { mock_dogcards_list } from './cards/mock_dogcards_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dog-adopt';
  dogCards1: DogCardModel [] = [];

  constructor(private dogCardService:dogCardService){

  }
  ngOnInit(): void {
    this.dogCardService.getProducts().subscribe((data: DogCardModel[]) => {
      console.log("Fetching dogcards");
      for (var product of data){
        console.log(product);
        this.dogCards1.push(product);
      }
    })
  }
}
