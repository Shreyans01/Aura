import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent {
  options:string[] = ['4%','6%','10%', 'custom']
  optletPerc:any;
  handleFileInput(event: Event) {

    // const file = (event.target as HTMLInputElement).files[0];
    
    // this.writeValue({
    //   file
    // });
  }
}
