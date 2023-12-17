import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
      terminalId: ['', [Validators.required]],
      transactionType: ['', [Validators.required]],
      transactionAmount: ['', [Validators.required]],
      charge: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      grossTransAmountDom: ['', [Validators.required]],
      grossTransAmountIntl: ['', [Validators.required]],
      grossTransAmountVar: ['', [Validators.required]],
      serviceChargeAmountDom: ['', [Validators.required]],
      serviceChargeAmountIntl: ['', [Validators.required]],
      serviceChargeAmountVar: ['', [Validators.required]],
      netPayable: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  submitTransactionForm() {
    this.createTransactionForm.markAllAsTouched();
    console.log('Submit', this.createTransactionForm.value);
  }
}
