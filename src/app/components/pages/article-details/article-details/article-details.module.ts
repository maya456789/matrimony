import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details.component';
import { RouterModule, Routes } from '@angular/router';

const article_details: Routes = [{ path: '', component: ArticleDetailsComponent }];

@NgModule({
  declarations: [
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(article_details),
  ]
})
export class ArticleDetailsModule { }
