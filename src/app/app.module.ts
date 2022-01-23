import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navBarComponent } from 'src/app/navigation/navbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
