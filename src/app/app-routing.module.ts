import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationOccupationModule } from './components/pages/registration-occupation/registration-occupation.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./components/pages/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./components/pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'intrest-recived',
    loadChildren: () =>
      import('./components/pages/interest-received-new/interest-received-new.module').then(
        (m) => m.InterestReceivedNewModule
      ),
  },
  {
    path: 'intrest-sent',
    loadChildren: () =>
      import('./components/pages/interest-sent/interest-sent.module').then(
        (m) => m.InterestSentModule
      ),
  },
  {
    path: 'search-tabs',
    loadChildren: () =>
      import('./components/pages/search-tabs/search-tabs.module').then(
        (m) => m.SearchTabsModule
      ),
     
  },
  {

    path: 'intrest-accepted',
    loadChildren: () =>
      import('./components/pages/interest-accepted/interest-accepted.module').then(
        (m) => m.InterestAcceptedModule
      ),
  },
 
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./components/pages/verify-email/verify-email.module').then(
        (m) => m.VerifyEmailModule
      ),
  },
  {
    path: 'verify-number',
    loadChildren: () =>
      import('./components/pages/verify-number/verify-number.module').then(
        (m) => m.VerifyNumberModule
      ),
  },
  {
    path: 'set-password',
    loadChildren: () =>
      import('./components/pages/set-password/set-password.module').then(
        (m) => m.SetPasswordModule
      ),
  },
  {
    path: 'personal-details',
    loadChildren: () =>
      import('./components/pages/registration-personal-details/registration-personal-details.module').then(
        (m) => m.RegistrationPersonalDetailsModule
      ),
  },
  {
    path: 'photo-and-video',
    loadChildren: () =>
      import('./components/pages/registration-photo-and-video/registration-photo-and-video.module').then(
        (m) => m.RegistrationPhotoAndVideoModule
      ),
  },
  {
    path: 'astro',
    loadChildren: () =>
      import('./components/pages/registration-astro/registration-astro.module').then(
        (m) => m.RegistrationAstroModule
      ),
  },
  {
    path: 'family-details',
    loadChildren: () =>
      import('./components/pages/registration-family-details/registration-family-details.module').then(
        (m) => m.RegistrationFamilyDetailsModule
      ),
  },
  {
    path: 'mediators',
    loadChildren: () =>
      import('./components/pages/registration-mediator/registration-mediator.module').then(
        (m) => m.RegistrationMediatorModule
      ),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./components/pages/registration-education/registration-education.module').then(
        (m) => m.RegistrationEducationModule
      ),
  },
  {
    path: 'add-education',
    loadChildren: () =>
      import('./components/pages/registration-add-education/registration-add-education.module').then(
        (m) => m.RegistrationAddEducationModule
      ),
  },

  {
    path: 'article-details/:id',
    loadChildren: () =>
      import('./components/pages/article-details/article-details/article-details.module').then(
        (m) => m.ArticleDetailsModule
      ),
  },
  {
    path: 'my-favorite',
    loadChildren: () =>
      import('./components/pages/my-favourite-profiles/my-favourite-profiles.module').then(
        (m) => m.MyFavouriteProfilesModule
      ),
  },
  {
    path: 'address',
    loadChildren: () =>
      import('./components/pages/registration-address/registration-address.module').then(
        (m) => m.RegistrationAddressModule
      ),
  },
  {
    path: 'occupation',
    loadChildren: () =>
      import('./components/pages/registration-occupation/registration-occupation.module').then(
        (m) => RegistrationOccupationModule
              ),
  },
  {
    path: 'event-beforelogin',
    loadChildren: () =>
      import('./components/pages/event-page-before-login/event-page-before-login/event-page-before-login.module').then(
        (m) => m.EventPageBeforeLoginModule
      ),
  },
  {
    path: 'eventdetails-beforelogin',
    loadChildren: () =>
      import('./components/pages/event-detail-page-before-login/event-detail-page-before-login/event-detail-page-before-login.module').then(
        (m) => m.EventDetailPageBeforeLoginModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./components/pages/faq/faq.module').then(
        (m) => m.FaqModule
      ),
  },
  {
    path: 'other-organization',
    loadChildren: () =>
      import('./components/pages/other-organization/other-organization.module').then(
        (m) => m.OtherOrganizationModule
      ),
  },
  {
    path: 'premium-membership',
    loadChildren: () =>
      import('./components/pages/premium-membership/premium-membership.module').then(
        (m) => m.PremiumMembershipModule
      ),
  },
  {
    path: 'premium-membership',
    loadChildren: () =>
      import('./components/pages/premium-membership/premium-membership.module').then(
        (m) => m.PremiumMembershipModule
      ),
  },
  {
    path: 'select-profession',
    loadChildren: () =>
      import('./components/pages/select-profession/select-profession.module').then(
        (m) => m.SelectProfessionModule
      ),
  },
  {
    path: 'thankyou',
    loadChildren: () =>
      import('./components/pages/registration-thankyou/registration-thankyou.module').then(
        (m) => m.RegistrationThankyouModule
      ),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./components/pages/registration-uploaddoc/registration-uploaddoc.module').then(
        (m) => m.RegistrationUploaddocModule
      ),
  },
  {
    path: 'before-mediator',
    loadChildren: () =>
      import('./components/pages/beforelogin-mediator/beforelogin-mediator.module').then(
        (m) => m.BeforeloginMediatorModule
      ),
  },
  {
    path: 'abouthim',
    loadChildren: () =>
      import('./components/pages/registration-abouthim/registration-abouthim.module').then(
        (m) => m.RegistrationAbouthimModule
      ),
  },
  {
    path: 'partner',
    loadChildren: () =>
      import('./components/pages/registration-partner/registration-partner.module').then(
        (m) => m.RegistrationPartnerModule
      ),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./components/pages/my-profile/my-profile.module').then(
        (m) => m.MyProfileModule
      ),
  },
  {
    path: 'profile-others',
    loadChildren: () =>
      import('./components/pages/profile-others/profile-others.module').then(
        (m) => m.ProfileOthersModule
      ),
  },
  // {
  //   path: 'header-after',
  //   loadChildren: () =>
  //     import('./layout/header-after-login/header-after-login.module').then(
  //       (m) => m.HeaderAfterLoginModule
  //     ),
  // },
  {
    path: 'search-profession',
    loadChildren: () =>
      import('./components/pages/search-profession/search-profession.module').then(
        (m) => m.SearchProfessionModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./components/pages/search/search.module').then(
        (m) => m.SearchModule
      ),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./components/pages/articles/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: 'my-suggestion',
    loadChildren: () =>
      import('./components/pages/my-suggestion/my-suggestion.module').then(
        (m) => m.MySuggestionModule
      ),
  },
 {
    path:'homepage',
    loadChildren:()=>
    import('./components/pages/homepage/homepage.module').then(
      (m)=>m.HomepageModule

    )

 },
 {
  path: 'homepage-afterlogin',
  loadChildren: () =>
    import('./components/pages/hompage-afterlogin/hompage-afterlogin.module').then(
      (m) => m.HompageAfterloginModule
    ),
},
{
  path: 'payment-methods',
  loadChildren: () =>
    import('./components/pages/payment-methods/payment-methods/payment-methods.module').then(
      (m) => m.PaymentMethodsModule
    ),
},
{
  path: 'search-result',
  loadChildren: () =>
    import('./components/pages/search-result/search-result.module').then(
      (m) => m.SearchResultModule
      ),
  },
  {
    path: 'homepage-mediator',
    loadChildren: () =>
      import('./components/pages/homepage-mediator/homepage-mediator.module').then(
        (m) => m.HomepageMediatorModule
        ),
    },
    {
      path: 'terms-condition',
      loadChildren: () =>
        import('./components/pages/terms-condition/terms-condition.module').then(
          (m) => m.TermsConditionModule
          ),
      },
      {
        path: 'register-now',
        loadChildren: () =>
          import('./components/pages/register-now/register-now.module').then(
            (m) => m.RegisterNowModule
            ),
        },
        {
          path: 'profile',
          loadChildren: () =>
            import('./components/pages/profile/profile.module').then(
              (m) => m.ProfileModule
              ),
          },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
