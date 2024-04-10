import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {
  cardForm: FormGroup;
  currentDiv:string = 'Option-5';
  submitted:boolean = false
  constructor(private formBuilder: FormBuilder){

    this.cardForm = this.formBuilder.group({
      CardNumber:['', Validators.required],
      name:['', Validators.required],
      validThru:['', Validators.required],
      cvv:['', Validators.required],
    });
  }
 
  onSubmit(){
    console.log(this.cardForm);
    this.submitted=true;
    
    // if(this.cardForm.invalid){

    // }else{
      this.openDialog();
    // }
  }

  get f() {
    return this.cardForm.controls;
  }

  openDialog(){
    const dialog = document.getElementById("modal");
      const banner = document.getElementById("banner");
      const mainPage = document.getElementById("main-page-content");
    
      if (dialog) {
        dialog.style.display = 'block';;
      }
      if (banner) {
        banner.style.filter = 'blur(3px)';
      }
      if (mainPage) {
        mainPage.style.filter = 'blur(3px)';
    }
  }

  closeDialog(){
    const dialog = document.getElementById("modal");
    const banner = document.getElementById("banner");
    const mainPage = document.getElementById("main-page-content");
  
    if (banner) {
      banner.style.filter = 'none';
    }
    if (mainPage) {
      mainPage.style.filter = 'none';
    }
    if (dialog) {
      dialog.style.display = 'none';
    }
  }

  divToDisplay(divNumber:number){

    const divToDisplay = 'Option-'+ divNumber;
 
    const currentDivElement = document.getElementById(this.currentDiv);
    if (currentDivElement) {
      currentDivElement.style.display = 'none';
    }

    const newDivElement = document.getElementById(divToDisplay);
    if (newDivElement) {
      newDivElement.style.display = 'block';
    }

    this.currentDiv = divToDisplay;
    

  }
}
