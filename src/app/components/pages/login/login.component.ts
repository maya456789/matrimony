import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageStateService } from 'src/app/services/page-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private pageStateService:PageStateService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    // this.pageStateService.login();
    // this.router.navigate(['/homepage-afterlogin'])

    
    if (this.myForm.valid) {
      
      const username = this.myForm.get('username')?.value;
      const password = this.myForm.get('password')?.value;
      console.log('Data',this.myForm);
      this.pageStateService.login();
      if(username==="mediator@email.com"){
        this.router.navigate(['/homepage-mediator'])
      }else{
this.router.navigate(['/homepage-afterlogin'])
      }// Process login logic
    } else {
      // Mark all fields as touched to show error messages
      Object.keys(this.myForm.controls).forEach(field => {
        const control = this.myForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}