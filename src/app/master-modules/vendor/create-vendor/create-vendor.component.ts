import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {
  inputValue: string = '';
  createBankForm:any
  constructor(private _formBuilder : FormBuilder){
    
  }
  ngOnInit(){
    this.createBankForm = this._formBuilder.group({
      bankName: ["", [Validators.required]],
      ibanNo: ["", [Validators.required]],
      companyName: ["", [Validators.required]],
      account: ["", [Validators.required]],
      message: ["", [Validators.required]],
    })

  }
  addPrefix() {
    this.inputValue = 'AE-'
  }
  submitBankForm(){
    this.createBankForm.markAllAsTouched();
    console.log("Submit", this.createBankForm.value)
  }
  
}
