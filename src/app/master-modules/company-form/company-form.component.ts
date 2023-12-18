import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  options: string[] = [
    'Trade License',
    'Memorandum',
    'Share Certificate',
    'Office Lease Agreement/Ejari',
    'VAT Registration Certificate',
  ];
  optletPerc: any;
  createCompanyForm: any;
  companyUpload: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createCompanyForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      issuingAuthority: ['', [Validators.required]],
      licenseNo: ['', [Validators.required]],
      issuingDate: ['', [Validators.required]],
      expiringDate: ['', [Validators.required]],
      taxRegistrationStatus: ['', [Validators.required]],
      taxRegistrationNo: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      poBoxNo: ['', [Validators.required]],
      registeredAddress: ['', [Validators.required]],
      alternateAddress: ['', [Validators.required]],
      businessActivities: ['', [Validators.required]],
      authorityName: ['', [Validators.required]],
      authorityContact: ['', [Validators.required]],
      documentType: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  submitCompanyForm() {
    this.createCompanyForm.markAllAsTouched();
    console.log('Submit', this.createCompanyForm.value);
  }

  handleFileInput(event: any) {
    this.companyUpload = event.target.files[0];
    console.log(this.companyUpload);
  }
}
