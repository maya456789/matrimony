import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HomepageComponent} from './components/pages/homepage/homepage.component'
import { HompageAfterloginComponent } from './components/pages/hompage-afterlogin/hompage-afterlogin.component';
import{OtherOrganizationComponent}from'./components/pages/other-organization/other-organization.component';
import { ArticlesComponent } from './components/pages/articles/articles/articles.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SearchComponent } from './components/pages/search/search.component';
import { SearchResultComponent } from './components/pages/search-result/search-result.component';
import { MySuggestionComponent } from './components/pages/my-suggestion/my-suggestion.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { RegistrationAddressComponent } from './components/pages/registration-address/registration-address.component';
import { SelectProfessionComponent } from './components/pages/select-profession/select-profession.component';
import { SearchProfessionComponent } from './components/pages/search-profession/search-profession.component';
import { AdvanceSearchComponent } from './components/pages/advance-search/advance-search.component';
import { QuickSearchComponent } from './components/pages/quick-search/quick-search.component';
import { SaveSearchComponent } from './components/pages/save-search/save-search.component';
import { SearchTabsComponent } from './components/pages/search-tabs/search-tabs.component';
import { RegistrationPartnerComponent } from './components/pages/registration-partner/registration-partner.component';
import { RegistrationUploaddocComponent } from './components/pages/registration-uploaddoc/registration-uploaddoc.component';
import { RegistrationAbouthimComponent } from './components/pages/registration-abouthim/registration-abouthim.component';
import { BeforeloginMediatorComponent } from './components/pages/beforelogin-mediator/beforelogin-mediator.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { HeaderAfterLoginComponent } from './layout/header-after-login/header-after-login.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';
import { HomepageMediatorComponent } from './components/pages/homepage-mediator/homepage-mediator.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    HompageAfterloginComponent,
   ArticlesComponent,
   OtherOrganizationComponent,
    SearchComponent,
    SearchResultComponent,
   MySuggestionComponent,
   SelectProfessionComponent,
   SearchProfessionComponent,
    AdvanceSearchComponent,
    QuickSearchComponent,
    SaveSearchComponent,
    SearchTabsComponent,
    MyProfileComponent,
    HeaderAfterLoginComponent,
    FooterBarComponent,
    HomepageMediatorComponent,
    TermsConditionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
