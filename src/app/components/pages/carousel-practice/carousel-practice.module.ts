import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselPracticeComponent } from './carousel-practice.component';
import { RouterModule, Routes } from '@angular/router';


const carouselp :Routes=[{path:'', component:CarouselPracticeComponent}]
@NgModule({
  declarations: [
    CarouselPracticeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carouselp),
  ]
})
export class CarouselPracticeModule { }
