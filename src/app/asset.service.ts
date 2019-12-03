import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AssetDef } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  searchVendor(value: number): Observable<import("./vendor").Vendor[]> {
    throw new Error("Method not implemented.");
  }
  searchAssettype(name: string): Observable<import("./assettype").Assettype[]> {
    throw new Error("Method not implemented.");
  }
  private baseUrl = 'http://localhost:58251/api';

  constructor(private http: HttpClient) { }
  getAssetList(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDefs');
  }
  getAssettypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/Assettypes');
  }
  
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/AssetDefs/'+id);
  }
  getAsset(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/AssetDefs/'+id);
  }
  updateAsset(id: number,asset: AssetDef)
  {
    return this.http.put(this.baseUrl+'/AssetDefs/'+id,asset);
  }
  addAsset(ast:AssetDef)
  {
    return this.http.post(this.baseUrl+'/AssetDefs/',ast);
  }
  searchAsset(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/AssetDefs?name='+name);
  }
}
