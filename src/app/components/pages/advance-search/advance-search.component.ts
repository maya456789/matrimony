import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit{

  value: number = 70;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  advanceSearch!: FormGroup;
  saveMySearch:any;
  selectedgotras:any=[];

  residing=[
    {
      country:'Currently residing in India', 
    },
    {
      country:'Currently residing outside India'
    }
  ]

  isFormSubmited:boolean=false;
  residingStatus!: boolean;
  residingOutStatus!:boolean;

  constructor(private fbuild:FormBuilder,){}

  dropdownList:any = [];
dropdownList2:any = [];
dropdownList3:any = [];
dropdownList4:any = [];
dropdownSettings:IDropdownSettings={};

  ngOnInit(){

    // this.router.navigate(['search']);
    
   
    
  
    
  
  
  
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
      motherToungue:['',Validators.required],
      specialCaseSearch:['',Validators.required],
      qualification:['',Validators.required],
      educationArea:['',Validators.required],
      workingWith:['',Validators.required],
      professionArea:['',Validators.required],
      incomeRange:['',Validators.required],
      
  
      // nested form group
      // residingOut: this.fbuild.group({
      //   country: ['', Validators.required],
      //   state: ['', Validators.required],
      //   city:['',Validators.required]
      // }),
  
    })

  }

  onSubmit2(FormValue:any,FormStatus:any){
    this.isFormSubmited=true;
    console.log("Advance Form Value",FormValue);
    console.log("Validation status",FormStatus);
  
  }

  selectedIndex:any;
  
changeSelection(event:any, index:any) {
  this.selectedIndex = event.target.checked ? index : undefined;
  this.residingStatus = event.target.checked;
  console.log("Selected Index",this.selectedIndex);
  // do your logic here...
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
  
}
