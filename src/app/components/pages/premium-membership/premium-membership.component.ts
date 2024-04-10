
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium-membership',
  templateUrl: './premium-membership.component.html',
  styleUrls: ['./premium-membership.component.css']
})
export class PremiumMembershipComponent {
  constructor(private fb: FormBuilder, private router: Router) {}


  gotopayment(){
this.router.navigate(['/payment-methods'])
  }
}
