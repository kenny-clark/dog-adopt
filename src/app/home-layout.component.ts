import { Component, OnInit } from "@angular/core";
import { DogCardModel } from "./cards/dog-cards.model";
import { dogCardService } from './cards/dog-cards.service';
import { mock_dogcards_list } from "./cards/mock_dogcards_list";
@Component({
    selector: 'da-home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./app.component.css']
})
export class HomeLayoutComponent implements OnInit{

    dogCards1: DogCardModel [] = [];
    mock_dogcards_list: any = mock_dogcards_list

    constructor(private dogCardService:dogCardService){

        for(var dog of mock_dogcards_list){
          console.log(dog);
          this.dogCards1.push(dog);
        }
      }
      ngOnInit(): void {
        this.dogCardService.getProducts().subscribe((data: DogCardModel[]) => {
          console.log("Fetching dogcards");
          console.log(data);
        })
    }
}