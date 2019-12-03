import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendor: Observable<Vendor>;
  vendors: Observable<Vendor[]>;


  constructor(private vendorService: VendorService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.vendor = this.vendorService.getvendorList();
    this.vendors = this.vendorService.getvendorList();

}
deletevendor(id:number){
  if(confirm('Do you want to delete this record?'))
  {
    this.vendorService.deleteVendor(id).subscribe(data=>{
      this.toastr.warning('Deleted Successfully..!!', 'Good to go :)');
      console.log(data);
    });
    this.reloadData();
  }
 
}
}
