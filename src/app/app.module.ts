import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navBarComponent } from 'src/app/navigation/top-navbar.component';
import { AppComponent } from './app.component';
import { dogCards } from './cards/dog-cards.component';
import { Footer1 } from './navigation/footer/footer1.component';
import { Footer2 } from './navigation/footer/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent, 
    Footer1,
    Footer2,
    dogCards
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
