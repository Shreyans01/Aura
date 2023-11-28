import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVendorComponent } from './manage-vendor.component';

describe('ManageVendorComponent', () => {
  let component: ManageVendorComponent;
  let fixture: ComponentFixture<ManageVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageVendorComponent]
    });
    fixture = TestBed.createComponent(ManageVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
