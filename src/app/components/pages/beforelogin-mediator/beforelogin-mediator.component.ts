import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beforelogin-mediator',
  templateUrl: './beforelogin-mediator.component.html',
  styleUrls: ['./beforelogin-mediator.component.css']
})
export class BeforeloginMediatorComponent implements OnInit {
  @ViewChild('outsideButton') outsideButton!: ElementRef;

  search: any;
  data: any;
  filteredItems: any[] = [];
  selectedMediator:any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.filteredItems=this.data;
   }
  ngOnInit(): void {
  

    this.data = [
      { id: 1, name: 'Vishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png' },
      { id: 2, name: 'Vishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png'},
      { id: 3, name: 'Vishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png' },
      { id: 4, name: 'Vishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png' },
      { id: 5, name: 'Vishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png' },
      { id: 6, name: 'Bishal Bompilwar', city: 'Pune', mobilenumber: '+91 8986554343', email: 'abc@email.com',   img: 'assets/img/Rectangle 1.png' },
    ];

    this.filteredItems=this.data;
  }

  updateFilteredItems() {
   
    this.filteredItems = this.data.filter((item: any) =>
      item.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  mederror=false;
  submitForm() {
    if(this.selectedMediator===undefined){
      this.mederror=true;
    }

    if(this.selectedMediator!==undefined){
      this.mederror=false;
      console.log('mediator id :',this.selectedMediator)
      this.router.navigate(['/education'])
    }
  
  }
  resetForm() {
    this.outsideButton.nativeElement.click();
  }
  previous() {
    this.router.navigate(['/family-details'])
  }
}
