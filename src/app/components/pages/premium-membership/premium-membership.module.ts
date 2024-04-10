import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PremiumMembershipComponent } from './premium-membership.component';

const PremiumMembership: Routes = [{ path: '', component: PremiumMembershipComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PremiumMembership)
  ]
})
export class PremiumMembershipModule { }
