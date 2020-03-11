import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  seller:Seller;
  list1:Items
  constructor(private builder:FormBuilder,private service:SellerService,private route:Router) {
    let id=Number(localStorage.getItem('Sid'))
    this.service.ViewItems(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
   ngOnInit() {
    this.itemForm=this.builder.group({
      id:[''],
      categoryid:[''],
      subcatergoryid:[''],
       price:[''],
        itemname:[''],
        description:[''],
        stockno:[''],
        remarks:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Edit()
  {
  this.item=new Items();
  this.item.id=Number(this.itemForm.value["id"]);
  this.item.categoryid=Number(this.itemForm.value["categoryid"]);
  this.item.subcatergoryid=Number(this.itemForm.value["subcatergoryid"]);
  this.item.itemname=this.itemForm.value["itemname"];
  this.item.price=this.itemForm.value["price"];
  this.item.stockno=Number(this.itemForm.value["stockno"]);
  this.item.remarks=this.itemForm.value["remarks"];
  this.item.description=this.itemForm.value["description"];
  this.item.imagename=this.itemForm.value["imagename"]
  console.log(this.item);
  this.service.UpdateItem(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully")},err=>{
    console.log(err)
  })
}

  Delete(id:number){
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }
  view(id:number)
{
 this.list1=new Items()
  this.service.GetById(id).subscribe(
    res=>{
      this.list1=res;
      console.log(this.list1)
      localStorage.setItem("id",this.list1.id.toString())
      this.itemForm.patchValue({
        id:Number(this.list1.id),
        categoryid:Number(this.list1.categoryid),
        subcatergoryid:Number(this.list1.subcatergoryid),
          itemname:this.list1.itemname,
          price:this.list1.price,
          stockno:Number(this.list1.stockno),
          description:this.list1.description,
          remarks:this.list1.remarks,
          imagename:this.list1.imagename
        })
      })
    }
    Logout(){
     // localStorage.clear();
      this.route.navigateByUrl('HOME');
    }
}
