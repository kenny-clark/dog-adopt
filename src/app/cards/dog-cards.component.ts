import { Component, Input } from "@angular/core";

@Component({
    selector: "da-dogCards",
    templateUrl: "./dog-cards.component.html",
    styleUrls: ["./dog-cards.component.css"]
})
export class dogCards{
    @Input() img: string;
    @Input() name: string;

    constructor(){
        this.img = "./assets/ajay2.png";
        this.name = "Error"
    }
}