import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
 private baseUrl = 'http://localhost:58251/api';

  constructor(private http: HttpClient) { }
  getPurchaseList(): Observable<any> 
  {
    return this.http.get(this.baseUrl + '/PurchaseOrders');
  }
  addPurchase(pdt:Purchase){
    return this.http.post(this.baseUrl+'/PurchaseOrders',pdt)
  }
  getAssetTypes(na:String):Observable<any>{
    return this.http.get(this.baseUrl+'/PurchaseOrders?na='+na);
  }
  /*getVendorname(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/VendorCreation?id=' +id);
  }*/
  getAsset(na:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/AssetDefs?name='+na);
  }
  getAllAssettypes():Observable<any>{
    return this.http.get(this.baseUrl+'/Assettypes');
  }
  postPurchase(po:Purchase)
  {
    return this.http.post(this.baseUrl+'/PurchaseOrders',po);
  }
  getVendors(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/PurchaseOrders/'+id);
  }
  getPurchase(id:number):Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseEdit/' + id);
  }
  updatePurchase(id:number,purchase:Purchase):Observable<any> {
    return this.http.put(this.baseUrl + '/PurchaseEdit/' + id,purchase);
  }
  cancelPurchase(id:number):Observable<any> {
    return this.http.delete(this.baseUrl + '/PurchaseEdit/' + id);
  }
}



