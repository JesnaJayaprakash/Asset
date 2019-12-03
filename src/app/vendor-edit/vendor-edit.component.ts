import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';
import { Assettype } from '../assettype';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor;
  vendorForm: FormGroup;
  assettypes: Observable<Assettype[]>;
  vendors:Observable<Vendor[]>;


  constructor(private service: VendorService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  id:number;
  vdr: any;
  ngOnInit() {this.id=this.route.snapshot.params["id"];
  this.vendorForm=this.formBuilder.group({
    vd_id: [Validators.required],
    vd_name: [Validators.compose([Validators.required])],
    vd_type: [Validators.compose([Validators.required])],
    vd_type_id: [Validators.compose([Validators.required])],
    vd_from: [Validators.compose([Validators.required])],
    vd_to: [Validators.compose([Validators.required])],
    vd_addr: [Validators.compose([Validators.required])]
  }); 
  this.service.getVendor(this.id).subscribe(x=>{
    this.vendor=x;
    console.log(this.vendor)
  }); 
  this.assettypes=this.service.getAssetTypes();
  

}
get formControls(){
  return this.vendorForm.controls;

}

updateVendor()
  {

    this.vendor.vd_id=this.id;
    this.vendor.vd_name=this.vendorForm.controls.vd_name.value;
    this.vendor.vd_type=this.vendorForm.controls.vd_type.value;
    this.vendor.vd_type_id=this.vendorForm.controls.vd_type_id.value;
    this.vendor.vd_from=this.vendorForm.controls.vd_from.value;
    this.vendor.vd_to=this.vendorForm.controls.vd_to.value;
    this.vendor.vd_addr=this.vendorForm.controls.vd_addr.value;
    this.service.putVendor(this.id,this.vendor).subscribe(res=>{
      this.toastr.success('Vendor Updated');
    });

  }


}
