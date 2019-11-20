import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';
import { Observable } from 'rxjs';
import { Assettype } from '../assettype';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';



@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {
  assetForm:FormGroup;
  title:string="Asset Creation";
  assettypes:Observable<Assettype[]>;
  asset:Asset=new Asset();
  message:string;
  username:string;
  isSubmitted=false;
  constructor(private assetservice:AssetService,private asFormBuilder:FormBuilder,private toastr:ToastrService,private router:Router,private authservice:AuthService) { }

  ngOnInit() {
  
  this.assettypes=this.assetservice.getAssettypes();
  this.assetForm=this.asFormBuilder.group({
    assetName:['',Validators.required],
    assetType:['',Validators.required],
    assetclass:['',Validators.required]
  });
this.username=localStorage.getItem('userID');
}
get formControls(){
  return this.assetForm.controls;
}
addAsset()
{
  this.isSubmitted=true;
  if(this.assetForm.invalid)
  {
    return;
  }
this.asset.ad_name=this.assetForm.controls.assetName.value;
this.asset.ad_type_id=this.assetForm.controls.assetType.value;
this.asset.ad_class=this.assetForm.controls.assetclass.value;
console.log(this.asset);
this.assetservice.checkAsset(this.asset).subscribe(x=>{
  console.log(x);
  if(x==0){
this.assetservice.addAssets(this.asset).subscribe(x=> {
  this.toastr.success('Assets Added','Good for you');
  this.ngOnInit();
})
  }
  else{
 this.message="This Asset Already exists";
  }
})
}
clearMessage()
{
  this.message=""

}
logOut()
{
  this.authservice.logout();
  this.router.navigate(['login']);
}
}