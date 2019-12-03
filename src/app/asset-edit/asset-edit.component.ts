import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetService } from '../asset.service';
import { Observable } from 'rxjs';
import { Assettype } from '../assettype';
import { AssetDef } from '../asset';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  asset: AssetDef;
  assetform: FormGroup;
  assettypes:Observable<Assettype[]>;
  assets:Observable<AssetDef[]>;

  constructor(private service: AssetService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }
  id:number;
  pdt: any;
  
  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.assetform=this.formBuilder.group({
      ad_id: [Validators.required],
      ad_name: [Validators.compose([Validators.required])],
      ad_type_id: [Validators.compose([Validators.required])],
      ad_class: [Validators.compose([Validators.required])]
    }); 
  //  this.assets=this.service.getAsset(this.id);
   // this.asset=this.assets[0];
   // console.log(this.asset.ad_name);
    this.service.getAsset(this.id).subscribe(x=>{
      this.asset=x;
    }); 
    this.assettypes=this.service.getAssettypes();
     
  }

  get formControl(){
    return this.assetform.controls;
  
  }

  updateAssets()
    {
      if(this.assetform.invalid)
      {
        return;
      }
  
      this.asset.ad_id=this.id;
      this.asset.ad_name=this.assetform.controls.ad_name.value;
      this.asset.ad_type_id=this.assetform.controls.ad_type_id.value;
      this.asset.ad_class=this.assetform.controls.ad_class.value;
      this.service.updateAsset(this.id,this.asset).subscribe(res=>{
        this.toastr.success('Asset Updated');
      });

    }

}

/*export class AssetEditComponent implements OnInit {
 
  
  assetform:FormGroup
  asset:AssetDef=new AssetDef();
  id:number;
 
  constructor(private service:AssetDefService,private route:ActivatedRoute,private formBuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    console.log(this.id);
    this.service.getAsset(this.id).subscribe(x=>{
      this.asset=x;
      
  });
  this.service.getAsset(this.id).subscribe(x=>{
    this.asset=x;

  }); 

  

  this.assetform=this.formBuilder.group({
    ad_id:[Validators.compose([Validators.required])],
    ad_name:[Validators.compose([Validators.required])],
    ad_type_id:[Validators.compose([Validators.required])],
    ad_class:[Validators.compose([Validators.required])],
    

  });
}
get formControl(){
  return this.assetform.controls;
}
updateAssets()
{
 this.asset.ad_id=this.assetform.controls.ad_id.value;
 this.asset.ad_name=this.assetform.controls.ad_name.value;
 this.asset.ad_type_id=this.assetform.controls.ad_type_id.value;
 this.asset.ad_class=this.assetform.controls.ad_class.value;
 console.log(this.asset)
 this.service.updateAsset(this.id,this.asset).subscribe(res=>{
  this.toastr.success("update Successfull")
 })


}

}*/