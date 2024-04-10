import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

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
      id:'01',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content ',
      buttonText: 'Button',
      img: 'assets/img/02.png',
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

  cards2 = [
    
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

  onBtnClick(cardId:any){
    window.location.href = 'article-details/'+cardId;
  }
}
