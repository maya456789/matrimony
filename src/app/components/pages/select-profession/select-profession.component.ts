import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-profession',
  templateUrl: './select-profession.component.html',
  styleUrls: ['./select-profession.component.css']
})
export class SelectProfessionComponent implements OnInit {

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

  cards2 = [
    {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },
    {
     
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
    {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    }, {
     
      img:'assets/img/doctor.png',
      work:'Doctors',
     result:'265 result'
   

    },
   
  ];
}
