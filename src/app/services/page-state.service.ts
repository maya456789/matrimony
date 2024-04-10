import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  showHeader = true;
  showFooter = true;
  currentRoute = '';

  isLoggedIn = false;

  login() {
    // Implement login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // Implement logout logic here
    this.isLoggedIn = false;
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.updateHeaderAndFooterVisibility();
      }
    });
  }

  private updateHeaderAndFooterVisibility() {
    // Customize the logic to determine when to show/hide header and footer
    // based on the currentRoute or other application-specific conditions.
    this.showHeader = !this.BeforeLoggedInPages(); // Example condition
    this.showFooter = !this.BeforeLoggedInPages(); // Example condition
  }

  BeforeLoggedInPages(){
    const currentUrl = this.router.url;
    return (
      // currentUrl.includes('') ||
      currentUrl.includes('/login') ||
      currentUrl.includes('/verify-email') ||
      currentUrl.includes('/verify-number') ||
      currentUrl.includes('/set-password') ||
      currentUrl.includes('/personal-details') ||
      currentUrl.includes('/photo-and-video') ||
      currentUrl.includes('/astro') ||
      currentUrl.includes('/family-details') ||
      currentUrl.includes('/mediators') ||
      currentUrl.includes('/education') ||
      currentUrl.includes('/add-education') ||
      currentUrl.includes('/address') ||
      currentUrl.includes('/occupation') ||
      currentUrl.includes('/thankyou') ||
      currentUrl.includes('/upload') ||
      currentUrl.includes('/occupation') ||
      currentUrl.includes('/abouthim') ||
      currentUrl.includes('/registration')||
      currentUrl.includes('/partner')
    );
  }
}
