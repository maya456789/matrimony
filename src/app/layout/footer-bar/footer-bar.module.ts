import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './footer-bar.component';
import { Routes, RouterModule } from '@angular/router';

// const footerBar: Routes = [
//   { path: '', component: FooterBarComponent }
// ];


@NgModule({
  declarations: [
    FooterBarComponent

  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(footerBar)
  ]
})
export class FooterBarModule { }
