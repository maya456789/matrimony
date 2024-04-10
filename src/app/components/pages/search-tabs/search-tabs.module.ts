import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchTabsComponent } from './search-tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const searchtabs: Routes = [{ path: '', component: SearchTabsComponent,
children:[
  {
    path: 'quick-search',
    loadChildren: () =>
      import('./../../../components/pages/quick-search/quick-search.module').then(
        (m) => m.QuickSearchModule
      ),
  },
  {
    path: 'advance-search',
    loadChildren: () =>
      import('./../../../components/pages/advance-search/advance-search.module').then(
        (m) => m.AdvanceSearchModule
      ),
  },
  {
    path: 'save-my-search',
    loadChildren: () =>
      import('./../../../components/pages/save-search/save-search.module').then(
        (m) => m.SaveSearchModule
      ),
  }

] },
];

@NgModule({
  declarations: [
     ],
  imports: [
    CommonModule,
    RouterModule.forChild(searchtabs),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchTabsModule { }
