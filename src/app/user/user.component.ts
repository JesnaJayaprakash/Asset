import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
import {AssetService}from '../asset.service';
import{Asset} from '../asset';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title:string="Asset Creation";
  assets:Observable<Asset[]>;
  username:string;

 constructor(private assetservice:AssetService,private toastr:ToastrService,private authservice:AuthService, private router:Router) { }

  ngOnInit() {
    this.assets=this.assetservice.listAssetList();
    this.username=localStorage.getItem('userID');
  }
  logOut()
  {
  this.authservice.logout();
  this.router.navigate(['login']);
  }

}
