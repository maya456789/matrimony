import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageStateService } from 'src/app/services/page-state.service';
@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.css']
})
export class HeaderAfterLoginComponent implements OnInit {
  navLinksVisible = true;
  showFiltersDiv: boolean = false;

  constructor(private pageStateService: PageStateService, private router : Router) {

   }
  toggleNavLinks() {
    this.navLinksVisible = !this.navLinksVisible;
  }

  toggleFilterDiv() {
    this.showFiltersDiv = !this.showFiltersDiv;
  }
 

  ngOnInit(): void {
  }
  cards = [
    {
      img : 'assets/img/Image.jpg',

    }

  ]
  cards2 = [
    {
      img : 'assets/img/Image.jpg',
      id: '215AD35',
      name: 'Vishal Bompilwar', 
      address: '23,pune, India',
      education: 'MBA, Project Manager'

    }

  ]

  logout2(){
    this.pageStateService.logout();
this.router.navigate(['/homepage']);
  }

}
