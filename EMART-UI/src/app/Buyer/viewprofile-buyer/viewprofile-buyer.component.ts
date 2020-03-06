import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Token } from 'src/app/Models/token';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewprofile-buyer',
  templateUrl: './viewprofile-buyer.component.html',
  styleUrls: ['./viewprofile-buyer.component.css']
})
export class ViewprofileBuyerComponent implements OnInit {
  form:FormGroup
  submitted=false;
  buyer:Buyer;
  token:Token;
  id:number;
  list:Buyer[];
  constructor(private builder:FormBuilder,private service:UserService) {
    this.id=JSON.parse(localStorage.getItem('Bid')) ;
  }
  
    ngOnInit() {
      this.form=this.builder.group({
        
        bid:[''],
        username:[''],
        password:[''],
        emailid:[''],
        mobile:[''],
        datetime:['']
    })
  this.buyerprofile();
  }
  buyerprofile()
    {
      this.service.Profile(this.id).subscribe(res=>  
        {
          
          this.buyer=res;
          console.log(this.buyer);
          this.form.patchValue({
            bid:Number(this.buyer.bid),
            username:this.buyer.username,
            email:this.buyer.email,
            password:this.buyer.password,
            mobileno:this.buyer.mobileno,
            
          })
         })
  }
  get f(){return this.form.controls;}
  Edit()
    {
      this.buyer=new Buyer();
      this.buyer.bid=Number(this.form.value["bid"]),
      this.buyer.username=this.form.value["username"],
      this.buyer.email=this.form.value["email"],
      this.buyer.password=this.form.value["password"],
      this.buyer.mobileno=this.form.value["mobileno"],
      this.service.EditProfileBuyer(this.buyer).subscribe(res=>{console.log(this.buyer),alert("updated succesfully"),this.buyerprofile()},err=>{
        console.log(err)
      })
    }
}