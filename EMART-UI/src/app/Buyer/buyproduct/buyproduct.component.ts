import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Buyer } from 'src/app/Models/buyer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
purchasehistory:PurchaseHistory;
buyer:Buyer;
submitted=false;
payform:FormGroup
list:PurchaseHistory[]=[];
item:Items;
  constructor(private formbuilder:FormBuilder,private service:UserService) { 
    // this.sid=JSON.parse(localStorage.getItem('Sid')) ;
    // this.bid=JSON.parse(localStorage.getItem('Bid')) ;
  }

ngOnInit() {
  this. payform=this.formbuilder.group({
    transactiontype:[''],
    cardNumber:[''],
    cvv:[''],
    edate:[''],
    name:[''],
    datetime:[''],
    noofitems:[''],
    remarks:['']
  })
  this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.id);
}
onSubmit()
{
this.purchasehistory=new PurchaseHistory();
this.purchasehistory.id=Math.floor(Math.random()*999);
this.purchasehistory.bid=Number(localStorage.getItem('Bid'));
this.purchasehistory.sid=this.item.sid;
this.purchasehistory.noofitems=this.payform.value["noofitems"];
this.purchasehistory.id=this.item.id;
this.purchasehistory.transactiontype=this.payform.value["transactiontype"]
   this.purchasehistory.datetime=this.payform.value["datetime"];
   this.purchasehistory.remarks=this.payform.value["remarks"];
   console.log(this.purchasehistory);
   this.service.BuyItem(this.purchasehistory).subscribe(res=>{
     console.log("Purchase was Sucessfull");
     alert('Purchase Done Successfully');
   })

}
}
