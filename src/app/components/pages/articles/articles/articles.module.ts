import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const articles : Routes = [{ path: '', component: ArticlesComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(articles)
  ]
})
export class ArticlesModule { }
