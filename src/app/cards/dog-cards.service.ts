import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogCardModel } from "./dog-cards.model";

@Injectable(
    {providedIn: 'root'}
)
export class dogCardService{
    private baseUrl:string = "https://dog-adopt-e7baf-default-rtdb.firebaseio.com/";
    private dogCardEndPoint:string = "dogcards.json";

    constructor(private http: HttpClient){

    }

    getProducts(){
        return this.http.get<DogCardModel[]>(this.baseUrl + this.dogCardEndPoint);
    }

    getProduct(index:number){
        return this.http.get<DogCardModel>(this.baseUrl + 'dogcards' + '/' + index + '.json');
    }
}