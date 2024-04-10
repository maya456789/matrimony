import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-astro',
  templateUrl: './registration-astro.component.html',
  styleUrls: ['./registration-astro.component.css']
})
export class RegistrationAstroComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.myForm = this.fb.group({
    birthName: ['', Validators.required],
    birthPlace: ['', Validators.required],
    birthTime: ['', Validators.required],
    ampm: ['am'] // Initial value
  });
  }
  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      this.router.navigate(['/family-details'])
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
this.router.navigate(['/photo-and-video'])
  }
}
