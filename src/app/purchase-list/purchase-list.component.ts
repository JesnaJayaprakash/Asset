import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';

import { Observable } from 'rxjs';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../login.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  purchases: Observable<Purchase[]>;

  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData(){
    this.purchases=this.purchaseService.getPurchaseList();
    this.purchases.forEach(x=>{
      x.forEach(element=>{
        console.log(element["pd_ad_name"]);
      })
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');

  }
  cancelOrder(id: number){
    this.purchaseService.cancelPurchase(id).subscribe(res=>{
      this.toastr.success('Order Cancelled');
      this.reloadData();
    })

  }

}
