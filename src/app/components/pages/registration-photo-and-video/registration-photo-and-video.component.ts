import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-photo-and-video',
  templateUrl: './registration-photo-and-video.component.html',
  styleUrls: ['./registration-photo-and-video.component.css']
})
export class RegistrationPhotoAndVideoComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
  }
  previous(){
    this.router.navigate(['/personal-details']);
      }
  resetForm(){
    
  }

  submitForm(){
    this.router.navigate(['/astro'])
  }
}
