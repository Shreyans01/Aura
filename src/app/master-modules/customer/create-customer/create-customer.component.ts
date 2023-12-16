import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm :any
  customerUpload : File | null = null;
  handleFileInput(event : any) {
    this.customerUpload = event.target.files[0];
    console.log(this.customerUpload)
  }
   constructor(private _formBuilder : FormBuilder){

   }
  ngOnInit(): void {
     this.createCustomerForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      bankName: ["", [Validators.required]],
      uid: ["", [Validators.required]],
      idNo: ["", [Validators.required]],
      idType: ["", [Validators.required]],
      message: ["", [Validators.required]],
      
    })
  }

  submitCustomerForm(){
    this.createCustomerForm.markAllAsTouched();
    console.log("Submit", this.createCustomerForm.value)
  }
}
