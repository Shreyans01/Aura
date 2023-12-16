import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent implements OnInit {
  options:string[] = ['4%','6%','10%', 'custom']
  optletPerc:any;
  createOutletForm:any;
  handleFileInput(event: Event) {

    // const file = (event.target as HTMLInputElement).files[0];
    
    // this.writeValue({
    //   file
    // });
  }
  constructor(private _formBuilder : FormBuilder ){
  }

  ngOnInit(){
    this.createOutletForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      percentageDom: ["", [Validators.required]],
      percentageIntl: ["", [Validators.required]],
      percentageVar: ["", [Validators.required]],
      contactDetails: this._formBuilder.array([this.createContactDetails()]),
      message: ["", [Validators.required]],
      
    })
  }

  submitOutletForm(){
    this.createOutletForm.markAllAsTouched();
    console.log("Submit", this.createOutletForm.value)
  }

  addContactDetails(): void {
    var ContactDetails = this.createOutletForm.get('contactDetails') as FormArray;
    ContactDetails.push(this.createContactDetails());
  }

  createContactDetails(): FormGroup {
    return this._formBuilder.group({
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      representative:["", [Validators.required]]
    });
  }
  deleteContactDetails(index: number){
    var ContactDetails = this.createOutletForm.get('contactDetails') as FormArray;
    ContactDetails.removeAt(index)
  }
}
