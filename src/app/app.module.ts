import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from './app.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterOrderComponent } from './assetmaster-order/assetmaster-order.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetAddComponent,
    AssetEditComponent,
    AssetListComponent,
    LoginComponent,
    VendorAddComponent,
    VendorEditComponent,
    VendorListComponent,
    AdminComponent,
    UserComponent,
    PurchaseAddComponent,
    PurchaseEditComponent,
    PurchaseListComponent,
    AssetmasterComponent,
    AssetmasterListComponent,
    AssetmasterOrderComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger' // set defaults here
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


