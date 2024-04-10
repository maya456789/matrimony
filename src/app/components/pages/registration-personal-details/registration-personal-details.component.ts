import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-personal-details',
  templateUrl: './registration-personal-details.component.html',
  styleUrls: ['./registration-personal-details.component.css']
})
export class RegistrationPersonalDetailsComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      gender: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      gotra1:['',Validators.required],
      gotra2:['',Validators.required],
      specialCases:['',Validators.required],
      countryCode:['',Validators.required],
      mobileNumber:['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      pcountryCode:['',Validators.required],
      parentsMobile:['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      relationship:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dob:['',Validators.required],
      bloodGroup:['',Validators.required],
      height:['',Validators.required],
      maritalStatus:['',Validators.required],
      eatingHabits:['',Validators.required],
      drinkingHabits:['',Validators.required],
      smokingHabits:['',Validators.required],

    });
  }

  resetForm() {
    this.outsideButton.nativeElement.click(); 
  }

  submitForm() {
    if (this.myForm.valid) {
      const formValue = this.myForm.value;
      console.log('Form value',formValue)
      this.router.navigate(['/photo-and-video'])
      // Send formValue to the server using Angular's HttpClient
      // Example: this.http.post('server_url', formValue).subscribe(...);
    }else{
       // Mark all fields as touched to show error messages
       Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
