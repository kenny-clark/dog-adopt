import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogCardModel } from "./dog-cards.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable(
    {providedIn: 'root'}
)
export class dogCardService{
    constructor(private db:AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<DogCardModel>("dogcards").valueChanges();
    }

    getProduct(index:number){
        
    }

    addCard(card:DogCardModel){
        this.db.list<DogCardModel>("cards").push(card);
    }
}