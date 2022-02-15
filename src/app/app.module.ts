import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navBarComponent } from 'src/app/navigation/toppers/top-navbar.component';
import { AppComponent } from './app.component';
import { bannerComponent } from './banners/banner.component';
import { dogCards } from './cards/dog-cards.component';
import { joinCards } from './cards/join-cards.component';
import { Footer1 } from './navigation/footer/footer1.component';
import { Footer2 } from './navigation/footer/footer2.component';
import { applyBar } from './navigation/toppers/top-applybar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent, 
    Footer1,
    Footer2,
    dogCards,
    bannerComponent,
    joinCards,
    applyBar,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
