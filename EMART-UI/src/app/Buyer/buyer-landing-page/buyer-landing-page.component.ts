import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  item:Items;
  list:Items[];
  list1:Items[];
  submitted=false;
  searchform:FormGroup;
    constructor(private service:UserService,
      private formbuilder:FormBuilder,private route:Router) { }
  
    ngOnInit() {
      this.searchform=this.formbuilder.group({
        itemname:['']
      })
    }  
  Search()
  {
    this.item=new Items();
    this.item.itemname=this.searchform.value["itemname"];
    this.service.Search(this.item.itemname).subscribe(res=>{
     // this.list=res;
      console.log(this.list1);
    }
    ,err=>{
      console.log(err);
    })
  }
  
}
