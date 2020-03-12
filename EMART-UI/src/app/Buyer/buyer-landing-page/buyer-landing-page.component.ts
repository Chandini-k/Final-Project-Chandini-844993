import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

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
    constructor(private service:BuyerService,
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
      console.log(this.list1);
    }
    ,err=>{
      console.log(err);
    })
  }
  Logout(){
    this.route.navigateByUrl('HOME');
  }
}
