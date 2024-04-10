import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-family-details',
  templateUrl: './registration-family-details.component.html',
  styleUrls: ['./registration-family-details.component.css']
})
export class RegistrationFamilyDetailsComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;
  @ViewChild('outsideButton2') outsideButton2!: ElementRef;
  myForm!: FormGroup;
  myForm2!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.myForm = this.fb.group({
      fatherFirstName: ['', Validators.required],
    fatherOccupation: ['', Validators.required],
    fatherEducation: ['', Validators.required],
    motherFirstName: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      motherEducation: ['', Validators.required],
      numberOfBrothers: ['', Validators.required],
      numberOfSisters: ['', Validators.required],
      brotherDetails: ['', Validators.required],
      sisterDetails: ['', Validators.required],
      // fullName: [this.myForm2.value?this.myForm2.value.fullName:'', Validators.required],
      // countryCode:[this.myForm2.value?this.myForm2.value.countryCode:'',Validators.required],
      // mobileNumber:[this.myForm2.value?this.myForm2.value.mobileNumber:'', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      // relation: [this.myForm2.value?this.myForm2.value.relation:'', Validators.required],
  });
  this.myForm2 = this.fb.group({
    fullName: ['', Validators.required],
    countryCode:['',Validators.required],
    mobileNumber:['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
    relation: ['', Validators.required],
});
  }
  submitForm() {
    if (this.myForm.valid && this.myForm2.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      const formData2 = this.myForm2.value;
      console.log(formData2);
      this.router.navigate(['/mediators'])
      // Here you can perform further actions like sending data to a server
    } else {
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      Object.keys(this.myForm2.controls).forEach(field => {
        const control = this.myForm2.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  submitForm2() {
    if (this.myForm2.valid) {
      const formData = this.myForm2.value;
      console.log(formData);
      // Here you can perform further actions like sending data to a server
    } else {
      Object.keys(this.myForm2.controls).forEach(field => {
        const control = this.myForm2.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  resetForm() {
    this.outsideButton.nativeElement.click(); 
    this.outsideButton2.nativeElement.click(); 
  }
  previous(){
this.router.navigate(['/astro'])
  }
}

