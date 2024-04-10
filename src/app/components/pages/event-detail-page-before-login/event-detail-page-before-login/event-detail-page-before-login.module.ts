import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailPageBeforeLoginComponent } from './event-detail-page-before-login.component';
import { Routes, RouterModule } from '@angular/router';
 
const EventDetailPageBeforeLogin: Routes = [{path: '', component: EventDetailPageBeforeLoginComponent}]

@NgModule({
  declarations: [ EventDetailPageBeforeLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EventDetailPageBeforeLogin),
  ]
})
export class EventDetailPageBeforeLoginModule { }
