import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
 createProductForm: any
  constructor(private _formBuilder : FormBuilder){

  }

  ngOnInit(): void {
    this.createProductForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      unit: ["", [Validators.required]],
      saleRate: ["", [Validators.required]],
      PurchaseRate: ["", [Validators.required]],
      message: ["", [Validators.required]],
    })
  }


  submitProductForm(){
    this.createProductForm.markAllAsTouched();
    console.log("Submit", this.createProductForm.value)
  }
}
