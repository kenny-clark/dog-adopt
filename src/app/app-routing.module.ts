import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { joinCards } from './cards/join-cards.component';
import { HomeLayoutComponent } from './home-layout.component';
import { applyBar } from './navigation/toppers/top-applybar.component';

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
