import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  id:any;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    
    console.log("Id is",this.id);
  }

  activeTab = 'popular';

  popular(activeTab:any){
    this.activeTab = activeTab;
  }

  recent(activeTab:any){
    this.activeTab = activeTab;
  }

  cards = [
    {
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: '/assets/img/Rectangle 19.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },
    
      {
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },
      {
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },
      {
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',  
         lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   
        lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img:'/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022'
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: '/assets/img/Rectangle 19.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022', 
      },{
        id:'215AD35',
        name:'Sayali Bompilwar',
        age: '29 ',
        img: 'assets/img/Group 2123.png',
        address:'pune,India',
        occupation:'MBA, Project Manager',  
        lastseen:'last seen on 16-10-2022'
      },
      
    
  ];
  

  cards2 = [
    {
     
      img:'assets/clip-art/Group\ 6706.svg',
      work:'Doctors',
     result:'265 result'
   

    },
    {
     
      img:'assets/img/doctor.png',
      work:'Engineer',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctor',
     result:'265 result'
   

    },
    {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Engineer',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctor',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },{
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },
    {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },
   
  ];


  cards4 = [
    
    {
      id:'03',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/06.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'04',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'05',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/08.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'06',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/09.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },

  ];
  
  cards5 = [
    
    {
      
      img: 'assets/img/doctor.png',
      name:'Shailesh Kashettiwar',
      position:'Technology Brains',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit '
    },
    {
      
      img: 'assets/img/doctor.png',
      name:'S.D. Chiddarwar',
      position:'Technology Brains',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      
      img: 'assets/img/doctor.png',
      name:'Akshay Bhaskarwar',
      position:'Technology Brains',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit '
    },
    
    {
      
      img: 'assets/img/doctor.png',
      name:'N.A. Bhaskarwar',
      position:'Technology Brains',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit '
    },
    {
      
      img: 'assets/img/doctor.png',
      name:'R.S. Kashettiwar',
      position:'Technology Brains',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit '
    },
    {
      
      img: 'assets/img/doctor.png',
      name:'Kishor Birewar',
      position:'Comm. & service',
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },

  ];



  selectedIdx = 3; // Initially selected index

  getClass(index: number): string {
    const diff = index - this.selectedIdx;
    if (diff === 0) return 'selected';
    if (diff === -1) return 'prev';
    if (diff === -2) return 'prevLeftSecond';
    if (diff === 1) return 'next';
    if (diff === 2) return 'nextRightSecond';
    return 'hide';
  }

  moveToSelected(element: string): void {
    if (element === 'prev' && this.selectedIdx > 0) {
      this.selectedIdx--;
    } else if (element === 'next' && this.selectedIdx < this.cards3.length - 1) {
      this.selectedIdx++;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        if (this.selectedIdx > 0) {
          this.moveToSelected('prev');
        }
        break;
      case 'ArrowRight':
        if (this.selectedIdx < this.cards3.length - 1) {
          this.moveToSelected('next');
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  }




  cards3 = [
    {
      id:'01',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'02',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'03',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'04',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'05',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'06',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },

  ];
}
