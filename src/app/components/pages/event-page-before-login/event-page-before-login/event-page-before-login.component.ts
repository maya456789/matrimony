import { Component, HostListener, ElementRef , ViewChild } from '@angular/core';


@Component({
  selector: 'app-event-page-before-login',
  templateUrl: './event-page-before-login.component.html',
  styleUrls: ['./event-page-before-login.component.css']
})
export class EventPageBeforeLoginComponent {
  showFiltersDiv: boolean = false;


  toggleFilterDiv() {
    this.showFiltersDiv = !this.showFiltersDiv;
  }

  cards = [
    {
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/02.png',
      auther:'anubhandh',
      date:'25th October 2022',
      date2: 'Wed,25th - Fri,27th',
      address: 'Pune Wedding Special Exhibiton',
      address2: 'Parth Banquet Hall,Kothrud,',


    },
    {
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/02.png',
      auther:'anubhandh',
      date:'25th October 2022',
      date2: 'Wed,25th - Fri,27th',
      address: 'Pune Wedding Special Exhibiton',
      address2: 'Parth Banquet Hall,Kothrud,',


    },
    {
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/02.png',
      auther:'anubhandh',
      date:'25th October 2022',
      date2: 'Wed,25th - Fri,27th',
      address: 'Pune Wedding Special Exhibiton',
      address2: 'Parth Banquet Hall,Kothrud,',


    },

   
 

  ];
 
}
