import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  value: number = 70;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  quickSearch: FormGroup;
  advanceSearch!: FormGroup;

  selectedgotras:any=[];

  isFormSubmited:boolean=false;
  residingStatus!: boolean;
  residingOutStatus!:boolean;

constructor (private fbuild:FormBuilder)
{
  this.quickSearch=this.fbuild.group({
    name:['',Validators.required],
    look_for:['',Validators.required],
    min_age:['',Validators.required],
    max_age:['',Validators.required]
  })

  
}
dropdownList:any = [];
dropdownList2:any = [];
dropdownList3:any = [];
dropdownList4:any = [];
dropdownSettings:IDropdownSettings={};
ngOnInit(){

  this.dropdownList = [
    { gotra_id: 1, gotra_text: 'gotra1' },
    { gotra_id: 2, gotra_text: 'gotra2' },
    { gotra_id: 3, gotra_text: 'gotra3' },
    { gotra_id: 4, gotra_text: 'gotra4' },
    { gotra_id: 5, gotra_text: 'gotra5' }
  ];
  this.dropdownList2 = [
    { gotra_id: 1, gotra_text: 'Medical' },
    { gotra_id: 2, gotra_text: 'MBA' },
    { gotra_id: 3, gotra_text: 'Engineering' },
   
  ];
  this.dropdownSettings = {
    idField: 'gotra_id',
    textField: 'gotra_text',
  };
  this.selectedgotras = [
    { gotra_id: 3, gotra_text: 'gotra3'  },
    { gotra_id: 4,gotra_text: 'gotra4' }
  ];

  this.advanceSearch=this.fbuild.group({
    mygotras: ['',]
  })

}

cards = [
  {
    id:'215AD35',
    name:'Sayali Bompilwar',
    age: '29 ',
    img: 'assets/img/Group 2123.png',
    address:'pune,India',
    occupation:'MBA, Project Manager',   
    lastseen:'last seen on 16-10-2022'
  },
  
    {
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },
    {
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },
    {
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',  
       lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   
      lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022'
    },{
      id:'215AD35',
      name:'Sayali Bompilwar',
      age: '29 ',
      img: 'assets/img/Group 2123.png',
      address:'pune,India',
      occupation:'MBA, Project Manager',   lastseen:'last seen on 16-10-2022', 
    },
    
  
];

onSubmit(){
  this.isFormSubmited=true;
 // console.log("Submit quick search",this.quickSearch);

  console.log('Selected gotras',this.advanceSearch);
}

residingIn(chk:any){
  console.log('checkbox status',chk.target.checked);
 this.residingStatus=chk.target.checked;
}

residingOut(chkStatus:any){
 this.residingOutStatus=chkStatus.target.checked;
}

ongotraSelect(gotra: any) {
  console.log('ongotraSelect', gotra);
}
ongotraDeSelect(gotra: any) {
  console.log('ongotraDeSelect', gotra);
}
onSelectAll(gotras: any) {
  console.log('onSelectAll', gotras);
}
onUnSelectAll() {
  console.log('onUnSelectAll fires');
}


//Range price picker start->


}
