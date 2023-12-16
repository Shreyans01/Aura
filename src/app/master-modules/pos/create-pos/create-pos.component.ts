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
import { FormControl } from '@angular/forms';
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

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */