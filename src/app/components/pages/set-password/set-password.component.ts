import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  myForm!: FormGroup;

  newPassword: string = '';
  retypePassword: string = '';
  isHuman: boolean = false;
  showError: boolean = false;
  isFormInvalid:boolean=false;
  constructor(private router: Router,private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      isHuman: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordsMatchValidator // Custom validator function
    });
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordsMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitPassword() {
    if (this.myForm.valid) {
      const password = this.myForm.get('password')?.value;
      console.log('Password:', password);
      this.router.navigate(['/personal-details'])
      
   
    } else {
      this.isFormInvalid = true;
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}