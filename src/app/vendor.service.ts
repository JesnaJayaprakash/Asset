import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:58251/api';

  constructor(private http: HttpClient) { }
  getvendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/VendorCreations');
}
deleteVendor(id:number):Observable<any>{
  return this.http.delete(this.baseUrl+'/VendorCreations/'+id);
}
addVendor(pdt:Vendor){
  return this.http.post(this.baseUrl+'/VendorCreations',pdt)
}
getAssetType(id:number):Observable<any>{
  return this.http.get(this.baseUrl+'/Assettypes/'+id);
}
getAssetTypes():Observable<any>{
  return this.http.get(this.baseUrl+'/Assettypes');
}
//updateVendor(id: number,vendor: Vendor)
  //{
  // return this.http.put(this.baseUrl+'/VendorCreation/'+id,vendor);
  //}
  getVendor(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/VendorCreations/'+id);
  }
  putVendor(id: number,vendor: Vendor)
  {
    return this.http.put(this.baseUrl+'/VendorCreations/'+id,vendor);
  }
  
}