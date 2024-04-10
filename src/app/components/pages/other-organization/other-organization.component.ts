import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other-organization',
  templateUrl: './other-organization.component.html',
  styleUrls: ['./other-organization.component.css']
})
export class OtherOrganizationComponent implements OnInit {

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
  organizations:any[]=[
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
    {
      title: 'Charity & Donation',
      description: 'We serve the Poor and Homeless. Join your hand with us for a better life & beautiful future',
      link:'https:/codebeautify.org/hyperlink-generator',
      img:'../../../../assets/img/donation.png'
    },
  ]

}
