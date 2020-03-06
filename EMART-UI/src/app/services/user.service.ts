import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'Rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
import { User } from '../Models/user';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
import { Items } from '../Models/items';
import { PurchaseHistory } from '../Models/purchase-history';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:52007/Account/'
  constructor(private http:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>
  {
     
     return this.http.post<any>(this.url+'REGISTER-BUYER',JSON.stringify(buyer),Requestheaders)
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
     
     return this.http.post<any>(this.url+'REGISTER-SELLER',JSON.stringify(seller),Requestheaders)
  }
  public BuyerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'BuyerLogin/'+uname+','+pwd,Requestheaders)
  }
  public SellerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SellerLogin/'+uname+','+pwd,Requestheaders)
  }
  url1:string='http://localhost:52007/Admin/'
  public AddCategory(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url1+'AddCategory',JSON.stringify(category),Requestheaders);
  }
  public AddSubCategory(subcategory:Subcategory):Observable<any>
  {
    return this.http.post<any>(this.url1+'AddSubCategory',JSON.stringify(subcategory),Requestheaders);
  }
  public DeleteCategory(cid:number):Observable<any>
  {
    return this.http.delete<any>(this.url1+'DeleteCategory/'+cid,Requestheaders);
  }
  public DeleteSubCategory(subid:number):Observable<any>
  {
    return this.http.delete<any>(this.url1+'DeleteSubCategory/'+subid,Requestheaders);
  }
  public GetAllCategories():Observable<Category[]>
  {
     return this.http.get<Category[]>(this.url1+'Category',Requestheaders)
  }
  public GetAllSubCategories():Observable<Subcategory[]>
  {
     return this.http.get<Subcategory[]>(this.url1+'SubCategory',Requestheaders)
  }
  url2:string='http://localhost:52007/Item/'
  public ViewItems(id:number):Observable<Items[]>
  {
     return this.http.get<Items[]>(this.url2+'ViewItems/'+id,Requestheaders);
  }
  public AddItem(items:Items):Observable<any>
  {
    return this.http.post<any>(this.url2+'AddItem',JSON.stringify(items),Requestheaders);
  }
  public UpdateItem(item:Items):Observable<any>
  {
     
     return this.http.put<any>(this.url2+'UpdateItem',item,Requestheaders)
  }
  public DeleteItem(id:number):Observable<any>
  {
     
     return this.http.delete<any>(this.url2+'Delete/'+id,Requestheaders)
  }
  public GetById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url2+'GetById/'+id,Requestheaders)
  }
  public GetCategories():Observable<Category[]>
  {
     return this.http.get<Category[]>(this.url2+'category',Requestheaders)
  }
  public GetSubCategories(categoryid:number):Observable<Subcategory[]>
  {
     return this.http.get<Subcategory[]>(this.url2+'subcategory/'+categoryid,Requestheaders)
  }
  url3:string='http://localhost:52007/Seller/'
  public Profile(sid:number):Observable<any>
  {
    return this.http.get<any>(this.url3+'Profile/'+sid,Requestheaders)
  }
  public EditProfile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url3+'Edit',seller,Requestheaders)
  }
  url4:string='http://localhost:52007/Buyer/'
  public ProfileBuyer(bid:number):Observable<any>
  {
    return this.http.get<any>(this.url4+'Profile/'+bid,Requestheaders)
  }
  public EditProfileBuyer(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url4+'Edit',buyer,Requestheaders)
  }
  public Search(name:string):Observable<any>
  {
    return this.http.get<any>(this.url4+'Search/'+name,Requestheaders)
  }
  public ViewItem(name:string):Observable<Items[]>
  {
     return this.http.get<Items[]>(this.url4+'ViewItems/'+name,Requestheaders);
  }
  public BuyItem(purchase:PurchaseHistory):Observable<any>
  {
    return this.http.post<any>(this.url4+'BuyItem',purchase)
  }
}
