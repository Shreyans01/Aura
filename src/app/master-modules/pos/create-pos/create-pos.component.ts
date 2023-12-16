// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-pos',
//   templateUrl: './create-pos.component.html',
//   styleUrls: ['./create-pos.component.scss']
// })
// export class CreatePosComponent {
//   options:string[] = ['4%','6%','10%', 'custom']
//   optletPerc:any
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

/**
 * @title Plain input autocomplete
 */
@Component({
  selector: 'app-create-pos',
  templateUrl: './create-pos.component.html',
  styleUrls: ['./create-pos.component.scss']
})
export class CreatePosComponent implements OnInit {
  control = new FormControl();
  streets: string[] = ['4%','6%','10%', 'custom'];
  filteredStreets!: Observable<string[]>;
  optletPerc: any;
  createPosForm :any

  constructor(private _formBuilder : FormBuilder){

  }

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.createPosForm = this._formBuilder.group({
      MerchantName: ["", [Validators.required]],
      MerchantId: ["", [Validators.required]],
      terminalId: ["", [Validators.required]],
      bankName: ["", [Validators.required]],
      terminalModelNumber: ["", [Validators.required]],
      terminalSerialNumber: ["", [Validators.required]],
      percentageDom: ["", [Validators.required]],
      percentageIntl: ["", [Validators.required]],
      percentageVar: ["", [Validators.required]],
      account: ["", [Validators.required]],
      message: ["", [Validators.required]],
    })
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  submitPosForm(){
    this.createPosForm.markAllAsTouched();
    console.log("Submit", this.createPosForm.value)
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */