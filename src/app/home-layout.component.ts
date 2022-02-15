import { Component } from "@angular/core";
import { DogCardModel } from "./cards/dog-cards.model";
import { mock_dogcards_list } from "./cards/mock_dogcards_list";
@Component({
    selector: 'da-home-layout',
    templateUrl: './home-layout.component.html'
})
export class HomeLayoutComponent{
    dogCards1: DogCardModel [] = [];
    mock_dogcards_list: any = mock_dogcards_list
    
}