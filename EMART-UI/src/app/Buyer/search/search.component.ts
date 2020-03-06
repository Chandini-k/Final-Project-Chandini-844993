import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  list:Items[]=[];
  item:Items
  num:number;
 
  constructor(private builder:FormBuilder,private service:UserService,private route:Router) {
    

 }

  ngOnInit() {
    this.itemform=this.builder.group({
      itemname:['']
    })
   
  }


  Search()
  {
    
    this.service.Search(this.itemform.value['itemname']).subscribe(res=>
      {
        
       this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      }
      )
  }
Buy(item:Items)
{
  console.log(item);
  localStorage.setItem('item',JSON.stringify(item));
  this.route.navigateByUrl('/BUYER/BUY PRODUCT');
}
}