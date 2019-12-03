import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { UserComponent } from './user/user.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterOrderComponent } from './assetmaster-order/assetmaster-order.component';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';



const routes: Routes = [
  //{path:'',pathMatch:'full',redirectTo:'create'},
  
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},

  {path:'create',component:AssetAddComponent},
  {path:'assets',component:AssetListComponent},
  {path:'edit/:id',component:AssetEditComponent},

  {path:'vendoradd',component:VendorAddComponent},
  {path:'vendors',component:VendorListComponent},
  {path:'edits/:id',component:VendorEditComponent},

  {path:'purchaseadd',component:PurchaseAddComponent},
  {path:'purchase',component:PurchaseListComponent},
  {path:'pedit/:id',component:PurchaseEditComponent},
  {path:'user',component:UserComponent},
  {path:'masterlist',component:AssetmasterListComponent},
  {path:'masterorderlist',component:AssetmasterOrderComponent},
  {path:'assetmaster/:id',component:AssetmasterComponent}


  

  

];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}