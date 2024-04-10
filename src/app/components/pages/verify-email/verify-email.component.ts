import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  numberlastdigit: string | undefined = 'anuban';
  countdown: number = 59;
  countdownInterval: any;
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  @ViewChild('otp1Input') otp1Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2Input') otp2Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3Input') otp3Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4Input') otp4Input!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) { }

  ngOnInit() {
    // Start the countdown timer
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        // If the countdown reaches 0, clear the interval
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }





handleInput(inputElement: HTMLInputElement, nextInput?: HTMLInputElement) {
  const maxLength = parseInt(inputElement.getAttribute('maxlength') || '1', 10);
  const currentLength = inputElement.value.length;

  if (inputElement.selectionStart === maxLength && nextInput) {
   
    nextInput.focus();
  } else if (inputElement.selectionStart === 0 && inputElement.selectionEnd === 0 && !inputElement.value) {
   
    if (inputElement.previousElementSibling) {
      (inputElement.previousElementSibling as HTMLInputElement).focus();
    }
  } else if (inputElement.value.length >= maxLength) {
    
    if (nextInput) {
      nextInput.focus();
    }
  }
}
  handleEnter(event: Event) {
    if (this.isOtpFilled()) {
    
      this.verifyNumber();
    }
  }

  isOtpFilled(): boolean {
    return this.otp1 !== '' && this.otp2 !== '' && this.otp3 !== '' && this.otp4 !== '';
  }

  skipForNow() {
   
  }

  resendCode() {
  
  }

  verifyNumber() {
    this.router.navigate(['/set-password']);
  }
  
}
