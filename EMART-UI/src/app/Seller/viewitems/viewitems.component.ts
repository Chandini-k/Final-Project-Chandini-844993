import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { UserService } from 'src/app/services/user.service';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
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
  constructor(private builder:FormBuilder,private service:UserService,private route:Router) {
    let id=Number(localStorage.getItem('id'))
    this.service.ViewItems(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
   ngOnInit() {
    this.itemForm=this.builder.group({
      sid:['']
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
   this.item.id=Number(localStorage.getItem("id"));
  this.item.itemname=this.itemForm.value["itemname"];
  this.item.price=this.itemForm.value["price"];
  this.item.stockno=Number(this.itemForm.value["stocko"]);
  this.item.remarks=this.itemForm.value["remarks"];
  this.item.description=this.itemForm.value["description"];
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
 this.item=new Items()
  this.service.GetById(id).subscribe(
    res=>{
      this.item=res;
      console.log(this.item)
      localStorage.setItem("id",this.item.id.toString())
      this.itemForm.patchValue({
          itemname:this.item.itemname,
          price:Number(this.item.price),
          stockno:Number(this.item.stockno),
          description:this.item.description
        })
      })
    }
}
