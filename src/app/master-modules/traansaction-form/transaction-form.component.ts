import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  options:string[] = ['4%','6%','10%', 'custom']
  optletPerc:any;
}
