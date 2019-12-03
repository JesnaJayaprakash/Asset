import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';
import { Purchase } from '../purchase';


@Component({
  selector: 'app-assetmaster-order',
  templateUrl: './assetmaster-order.component.html',
  styleUrls: ['./assetmaster-order.component.scss']
})
export class AssetmasterOrderComponent implements OnInit {
  purchases: Observable<Purchase[]>;
  
  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: AssetmasterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}





