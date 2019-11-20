import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { Asset } from '../asset';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  title: string = "Asset Creation";
  assets: Observable<Asset[]>;
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete this Asset?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  username: string;
  constructor(private assetservice: AssetService, private toastr: ToastrService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.assets = this.assetservice.listAssetList();
   
   
    console.log('got it...')
    this.username = localStorage.getItem('userID');
  }
  DeleteAsset(id: number) {
    this.assetservice.deleteAsset(id).subscribe(x => {
      this.toastr.error('Asset Deleted', ':(');
      this.ngOnInit();
    });
  }
  logOut() {
    this.authservice.logout();
    this.router.navigate(['login'])
  }
}