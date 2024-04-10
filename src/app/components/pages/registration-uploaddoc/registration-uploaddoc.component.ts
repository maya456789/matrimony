import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-uploaddoc',
  templateUrl: './registration-uploaddoc.component.html',
  styleUrls: ['./registration-uploaddoc.component.css']
})
export class RegistrationUploaddocComponent implements OnInit {


  @ViewChild('outsideButton') outsideButton!: ElementRef;
 
  myForm!: FormGroup;
 

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.myForm = this.fb.group({
    
     
      adhar: ['', Validators.required],
      // fullName: [this.myForm2.value?this.myForm2.value.fullName:'', Validators.required],
      // countryCode:[this.myForm2.value?this.myForm2.value.countryCode:'',Validators.required],
      // mobileNumber:[this.myForm2.value?this.myForm2.value.mobileNumber:'', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      // relation: [this.myForm2.value?this.myForm2.value.relation:'', Validators.required],
  });}
  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      this.router.navigate(['/abouthim'])
    } else {
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  resetForm() {
    this.outsideButton.nativeElement.click(); 
  }
  previous(){
this.router.navigate(['/partner'])
  }

 
}
