import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetmaster } from '../assetmaster';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';


@Component({
  selector: 'app-assetmaster-list',
  templateUrl: './assetmaster-list.component.html',
  styleUrls: ['./assetmaster-list.component.scss']
})
export class AssetmasterListComponent implements OnInit {

  masters: Observable<Assetmaster[]>;
  constructor(private authService: AuthService, private router: Router, private masterService: AssetmasterService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.masters=this.masterService.getMasterList();
    this.masters.forEach(x=>{
    console.log(x);
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}



