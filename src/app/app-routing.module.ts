import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { joinCards } from './cards/join-cards.component';
import { HomeLayoutComponent } from './home-layout.component';
import { applyBar } from './navigation/toppers/top-applybar.component';
import { CardsComponent } from './cards/cards.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'favorite', component: joinCards
  },
  {
    path: 'register', component: applyBar
  },
  {
    path: 'home',
    component: HomeLayoutComponent
  },
  {
    path: 'admin', component: CardsComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
