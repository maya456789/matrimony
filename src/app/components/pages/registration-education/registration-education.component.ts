import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-education',
  templateUrl: './registration-education.component.html',
  styleUrls: ['./registration-education.component.css']
})
export class RegistrationEducationComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;
  @ViewChild('closebutton') closebutton!: ElementRef;
  myForm!: FormGroup;
 
  oneducation=false;
  selectedValue:any;
index=1;


  constructor(private fb: FormBuilder,private router:Router) {}

  data:any[]=[];
  ngOnInit(): void { 
    this.myForm = this.fb.group({
      instituteSelect: ['', Validators.required],
      instituteName: ['', Validators.required],
      passoutYear: ['', Validators.required],
      educationAreaSelect:  ['', Validators.required],
      specializationSelect:  ['', Validators.required],
  });
  }
  edit(){
    
  }
  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      this.data.push(formData)
      console.log("Data:",this.data);
      this.cancel();
      this.closebutton.nativeElement.click(); 
    } else {
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
 
  onclickeducation(){
this.oneducation=true;
if(this.index===1){
this.index++;
  this.myForm = this.fb.group({
    instituteSelect: ['', Validators.required],
    instituteName: ['', Validators.required],
    passoutYear: ['', Validators.required],
    educationAreaSelect:  ['', Validators.required],
    specializationSelect:  ['', Validators.required],
});
}
  }
  
  resetForm() {
    this.outsideButton.nativeElement.click(); 
    
  }
  previous(){
this.router.navigate(['/mediators'])
  }
  cancel(){
    this.index=1;
    this.oneducation=false;
    this.outsideButton.nativeElement.click(); 
  }
  continue(){
    this.router.navigate(['/occupation'])
  }
  addeducation(){
    
  }
}
