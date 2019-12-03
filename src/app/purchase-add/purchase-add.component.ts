import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Assettype } from '../assettype';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from '../purchase.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {
  purchaseForm:FormGroup;
  purchase:Purchase=new Purchase();
  vendors:Observable<Vendor[]>
  assettypes: Observable<Assettype[]>;
  assetId:number;

  constructor(private formBuilder: FormBuilder,private router: Router, private toastr: ToastrService,private purchaseservice:PurchaseService) { } 

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {  
       this.purchaseForm = this.formBuilder.group({
      pd_orderno: ['ORD'+Math.floor((Math.random()*10000)+1),Validators.compose([Validators.required])],
     // pd_ad_id:['', Validators.compose([Validators.required])],
      //vd_type: 'Supplier',
      pd_type_id: ['', Validators.compose([Validators.required])],
      pd_qty: ['', Validators.compose([Validators.required])],
      pd_vendor_id:['', Validators.compose([Validators.required])],
     // pd_date: ['', Validators.compose([Validators.required])],
     // pd_ddate: ['', Validators.compose([Validators.required])],
     // pd_status:  'PO- RAISED'

    });
  }
  onOptionsSelection(value:number)
{
  this.vendors=this.purchaseservice.getVendors(value);
  this.vendors.subscribe(data=>{
    
  data.forEach(x=>{
  console.log(x["vd_name"]);
  })
})

}
searchAssetType(na:string)
{
  this.assettypes=this.purchaseservice.getAssetTypes(na);
  this.purchaseservice.getAsset(na).subscribe(res=>{
    res.forEach(element => {
      this.assetId=element["ad_id"];
      console.log(this.assetId);
    })
   
   

  })
}



    //this.assettypes=this.purchaseservice.getAssetTypes();
    //this.vendors=this.purchaseservice.getVendorname();   

  addpurchase()
  {
    this.purchase.pd_orderno = this.purchaseForm.controls.pd_orderno.value;
    this.purchase.pd_ad_id = this.assetId;
    this.purchase.pd_type_id = this.purchaseForm.controls.pd_type_id.value;
    this.purchase.pd_qty = this.purchaseForm.controls.pd_qty.value;
    this.purchase.pd_vendor_id = this.purchaseForm.controls.pd_vendor_id.value;
    this.purchase.pd_status ="PO-Raised with Supplier";
    this.purchaseservice.addPurchase(this.purchase).subscribe(res=>{
      this.toastr.success('Success','Order Placed');
      this.reloadData();
    })
  }
  
}

      /*if(res==0)
      {
        this.toastr.success('Order Placed');
        this.router.navigateByUrl('/purchase');
      }
      else
      {
        this.toastr.error("Vendor already exist");
      }
    });

    this.ngOnInit();

  }
}


 
  /*if(ad_name="")
  {
    this.assettypes=this.purchaseservice.getpurchaseList();
  }*/



  