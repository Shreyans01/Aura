import { Component } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
  options:string[] = ['Trade License','Memorandum','Share Certificate', 'Office Lease Agreement/Ejari', 'VAT Registration Certificate']
  optletPerc:any;
}
