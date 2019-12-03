import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';
import { Assetmaster } from './assetmaster';

@Injectable({
  providedIn: 'root'
})
export class AssetmasterService {
  [x: string]: any;
  private baseUrl = 'http://localhost:58251/api';

  constructor(private http: HttpClient) { }
  getAssetOrders(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetMastersorderview');
  }

  getAssetOrder(id:string): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetMastersorderview?ordno='+id);
  }

  postAsset(asset: Assetmaster){
    return this.http.post(this.baseUrl+'/AssetMasters',asset);
  }

  updatePurchase(id:number, purchase: Purchase): Observable<any>{
    return this.http.put(this.baseUrl+'/AssetMasters/'+ id, purchase);
  }

  getMasterList(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetMasters');
  }
  
  
  

}


