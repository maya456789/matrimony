import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.component.html',
  styleUrls: ['./verify-number.component.css']
})
export class VerifyNumberComponent implements OnInit {

  numberlastdigit: number | undefined = 78978;
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
    // Automatically focus on the next input field when the current input is filled
    nextInput.focus();
  } else if (inputElement.selectionStart === 0 && inputElement.selectionEnd === 0 && !inputElement.value) {
    // Move to the previous input field when pressing the backspace key at the beginning of the current input
    if (inputElement.previousElementSibling) {
      (inputElement.previousElementSibling as HTMLInputElement).focus();
    }
  } else if (inputElement.value.length >= maxLength) {
    // If the current input field is filled and there is a next input field, focus on the next input field
    if (nextInput) {
      nextInput.focus();
    }
  }
}
  handleEnter(event: Event) {
    if (this.isOtpFilled()) {
      // Perform the form submission when Enter is pressed and all input fields are filled
      this.verifyNumber();
    }
  }

  isOtpFilled(): boolean {
    // Check if all OTP input fields are filled
    return this.otp1 !== '' && this.otp2 !== '' && this.otp3 !== '' && this.otp4 !== '';
  }

  skipForNow() {
    // Replace with your logic to handle "Skip for now" action
  }

  resendCode() {
    // Replace with your logic to handle "Resend Code" action
  }

  verifyNumber() {
    this.router.navigate(['/verify-email']);
  }
}



