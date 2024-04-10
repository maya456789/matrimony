import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-save-search',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.css']
})
export class SaveSearchComponent implements OnInit{

  saveMySearch:any;
  isFormSubmited:boolean=false;
  selectedgotras:any=[];

  value2: number = 70;
  highValue2: number = 90;
  options2: Options = {
    floor: 0,
    ceil: 100
  };


  value3: number = 70;
  highValue3: number = 90;
  options3: Options = {
    floor: 0,
    ceil: 100
  };

  constructor(private fbuild:FormBuilder,){}

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
  

    this.saveMySearch=this.fbuild.group({
      lookingFor: ['',Validators.required],
      minAge: ['',Validators.required],
      maxAge:['',Validators.required],
      height:['',Validators.required],
      mygotras: ['',Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city:['',Validators.required],
      maratialStatus:['',Validators.required],
      bloodGroup:['',Validators.required],
      qualification:['',Validators.required],
      educationArea:['',Validators.required],
      workingWith:['',Validators.required],
      professionalArea:['',Validators.required],
     
     
      incomeRange:['',Validators.required],
      
  
      // nested form group
      // residingOut: this.fbuild.group({
      //   country: ['', Validators.required],
      //   state: ['', Validators.required],
      //   city:['',Validators.required]
      // }),
  
    })
    
  }

  private _prevSelected: any;
selectedValue : any;
handleChange(evt:any) {
  var target = evt.target;
  console.log("Radio value is -:",this.selectedValue);
  if (target.checked) {
    
    this._prevSelected = target;
  } else {
    
  }
}

onSubmit2(FormValue:any,FormStatus:any){
  this.isFormSubmited=true;
  console.log("Advance Form Value",FormValue);
  console.log("Validation status",FormStatus);

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
}
