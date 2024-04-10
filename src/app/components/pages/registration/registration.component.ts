import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm!:FormGroup;
  myForm2!:FormGroup
  constructor(private router: Router,private fb:FormBuilder){}
  countryCodes: string[] = ['+1', '+91', '+44', '+81', '+86']; 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      selectedItem: [null, Validators.required], // Add other form controls here
      // yourName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileCountryCode: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      aryaCheck: [false, Validators.requiredTrue],
      privacyCheck: [false, Validators.requiredTrue]
    });
    this.myForm2 = this.fb.group({
      selectedItem2: [null, Validators.required], // Add other form controls here
      yourName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileCountryCode: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      aryaCheck: [false, Validators.requiredTrue],
      privacyCheck: [false, Validators.requiredTrue]
    });
  }

  fiveItems: string[] = ['Myself', 'Son', 'Doughter', 'Sibling', 'Relative'];
  selectedItem: any = this.fiveItems[0]; 
  selectedCountryCode: string = this.countryCodes[0]; 
  activeDropdown: string = ''; 

  toggleDropdown(dropdownName: any) {
    this.activeDropdown = this.activeDropdown === dropdownName ? '' : dropdownName;
  }

  onMobileCountryCodeChange(event: any) {
  
  }
  
  submitForm() {
    if (this.myForm.valid) {
      // Handle form submission
      console.log(this.myForm.value);
      this.router.navigate(['/verify-number'])
    } else {
      this.myForm.markAllAsTouched();
    }
    if (this.myForm2.valid) {
      // Handle form submission
      console.log(this.myForm2.value);
      this.router.navigate(['/verify-number'])
    } else {
      this.myForm2.markAllAsTouched();
    }
  }
  }
  
