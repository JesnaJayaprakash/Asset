import { Component, OnInit } from '@angular/core';
import { AssetDef } from '../asset';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { AssetService } from '../asset.service';
import { Observable } from 'rxjs';
import { Assettype } from '../assettype';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {
  assetform:FormGroup
  asset:AssetDef=new AssetDef();
  assettypes:Observable<Assettype[]>;
 
  constructor(private formBuilder:FormBuilder,private service:AssetService,private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
    
    this.assetform=this.formBuilder.group({
      ad_name:['',Validators.compose([Validators.required])],
      ad_type_id:['',Validators.compose([Validators.required])],
      ad_class:['',Validators.compose([Validators.required])],
     
    });
    this.assettypes=this.service.getAssettypes();

}
get formcontrol()
  {
    return this.assetform.controls;
  }
  addAssets()
  {

    this.asset.ad_name = this.assetform.controls.ad_name.value;
    this.asset.ad_type_id = this.assetform.controls.ad_type_id.value;
    this.asset.ad_class = this.assetform.controls.ad_class.value;

    this.service.addAsset(this.asset).subscribe(res=>{
      if(res==0)
      {
        this.toastr.success('Successfully Added', 'Great ;)');
        
      }
      else
      {
        this.toastr.error("Asset already exist!!!!!!");
      }

    });
 
    this.ngOnInit();

    /*this.asset=this.assetform.value;
    console.log(this.asset)
    this.service.addAsset(this.asset).subscribe(x=>{alert("Asset added")});
    this.ngOnInit();*/

  }



}