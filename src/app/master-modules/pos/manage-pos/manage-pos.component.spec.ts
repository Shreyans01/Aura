import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePosComponent } from './manage-pos.component';

describe('ManagePosComponent', () => {
  let component: ManagePosComponent;
  let fixture: ComponentFixture<ManagePosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePosComponent]
    });
    fixture = TestBed.createComponent(ManagePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
