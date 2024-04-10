import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderAfterLoginComponent } from './layout/header-after-login/header-after-login.component';
import { PageStateService } from './services/page-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anubandh';


constructor(private router :Router,public pageStateService: PageStateService){

}
  // isLoggedIn = false;

  // login() {
  //   // Implement login logic here
  //   this.isLoggedIn = true;
  // }

  // logout() {
  //   // Implement logout logic here
  //   this.isLoggedIn = false;
  // }



  // BeforeLoggedInPages(){
  //   const currentUrl = this.router.url;
  //   return (
  //     currentUrl.includes('') ||
  //     currentUrl.includes('/login') ||
  //     currentUrl.includes('/verify-email') ||
  //     currentUrl.includes('/verify-number') ||
  //     currentUrl.includes('/set-password') ||
  //     currentUrl.includes('/personal-details') ||
  //     currentUrl.includes('/photo-and-video') ||
  //     currentUrl.includes('/astro') ||
  //     currentUrl.includes('/family-details') ||
  //     currentUrl.includes('/mediators') ||
  //     currentUrl.includes('/education') ||
  //     currentUrl.includes('/add-education') ||
  //     currentUrl.includes('/address') ||
  //     currentUrl.includes('/occupation') ||
  //     currentUrl.includes('/thank-you') ||
  //     currentUrl.includes('/upload') ||
  //     currentUrl.includes('/occupation') ||
  //     currentUrl.includes('/registration')
  //   );
  // }

  // AfterLoggedInPages(){
  //   const currentUrl = this.router.url;
  //   return (
  //     currentUrl.includes('homepage-afterlogin') ||
  //     currentUrl.includes('/main/payment-history') ||
  //     currentUrl.includes('/main/refund')
  //   );
  // }
}
