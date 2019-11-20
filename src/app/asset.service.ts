import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from 'src/environments/environment';
import {Asset} from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  count:number;
  baseUrl=environment.rootUrl;

  constructor(private http:HttpClient) { }
  listAssetList():Observable<any>
  {
    return this.http.get('http://localhost:58251/api/AssetDefs') 
  }
  getAssettypes():Observable<any>
  {
    return this.http.get(this.baseUrl+'/assettypes')
  }
  checkAsset(asset:Asset):Observable<any>
  {
    return this.http.get(this.baseUrl+'/assetdefs?name='+asset.ad_name)
  }
  addAssets(asset:Asset)
  {
    return this.http.post(this.baseUrl+'/assetdefs',asset)
  }
  getAsset(id:number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/assetdefs/'+id)
  }
  updateAsset(id:number,asset:Asset)
  {
    return this.http.put(this.baseUrl+'/assetdefs/'+id,asset);
  }
  deleteAsset(id:number)
  {
    return this.http.delete(this.baseUrl+'/assetdefs/'+id);
  }
}
