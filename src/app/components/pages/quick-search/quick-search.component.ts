import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent {
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

onSubmit(){
  this.isFormSubmited=true;
  console.log("Submit quick search",this.quickSearch);

 // console.log('Selected gotras',this.advanceSearch);
}

}
