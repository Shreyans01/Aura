import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  options: string[] = ['4%', '6%', '10%', 'custom'];
  optletPerc: any;
  createTransactionForm: any;

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createTransactionForm = this._formBuilder.group({
      date: ['', [Validators.required]],
      outletName: ['', [Validators.required]],
      outletId: ['', [Validators.required]],
      grossTransAmountDom: ['', [Validators.required]],
      grossTransAmountIntl: ['', [Validators.required]],
      grossTransAmountVar: ['', [Validators.required]],
      serviceChargeAmountDom: ['', [Validators.required]],
      serviceChargeAmountIntl: ['', [Validators.required]],
      serviceChargeAmountVar: ['', [Validators.required]],
      netPayable: ['', [Validators.required]],
      message: ['', [Validators.required]],
      transactionArray: this._formBuilder.array([
        this.createTransactionArray(),
      ]),
    });
  }

  submitTransactionForm() {
    this.createTransactionForm.markAllAsTouched();
    console.log('Submit', this.createTransactionForm.value);
  }

  addTransaction(): void {
    var transactionArray = this.createTransactionForm.get(
      'transactionArray'
    ) as FormArray;
    transactionArray.push(this.createTransactionArray());
  }

  createTransactionArray(): FormGroup {
    return this._formBuilder.group({
      terminalId: ['', [Validators.required]],
      transactionType: ['', [Validators.required]],
      transactionAmount: ['', [Validators.required]],
      charge: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }
  deleteTransactionArray(index: number) {
    var transactionArray = this.createTransactionForm.get(
      'transactionArray'
    ) as FormArray;
    transactionArray.removeAt(index);
  }
}
