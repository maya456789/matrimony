import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HompageAfterloginComponent} from './hompage-afterlogin.component';
import { RouterModule, Routes } from '@angular/router';


const homepageafter: Routes = [{ path: '', component: HompageAfterloginComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homepageafter),
  ]
})
export class HompageAfterloginModule { }
