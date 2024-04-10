import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  [x: string]: any;
  navLinksVisible = true;
  isActive=true;
  isActive2=false;
  constructor(private fb: FormBuilder, private router: Router) {}

istrue(){
  if(this.isActive){
    this.isActive=false
  }else{
    this.isActive=true
  }
}
  toggleNavLinks() {
    this.navLinksVisible = !this.navLinksVisible;
  }

  ngOnInit(): void {
    
  }
  
 
      isHomeRoute() {
        
      }
}
