import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-remove-category',
  templateUrl: './add-remove-category.component.html',
  styleUrls: ['./add-remove-category.component.css']
})
export class AddRemoveCategoryComponent implements OnInit {
  list:Category[]=[];
  category:Category;
  categoryForm:FormGroup;
  submitted=false;
  constructor(private frombuilder:FormBuilder,private service:UserService,private route:Router) {
    this.service.GetAllCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
    this.categoryForm=this.frombuilder.group({
      cname:['',Validators.required],
      cdetails:['',Validators.required]
    });
  }
  onSubmitAdd(){
    this.submitted=true;
    if(this.categoryForm.invalid){
     return;
    }
      else{
        alert("hi");
        this.category=new Category();
      this.category.cid=Math.floor(Math.random()*1000);
      this.category.cname=this.categoryForm.value["cname"];
      this.category.cdetails=this.categoryForm.value["cdetails"];
      this.list.push(this.category)
      console.log(this.category);
    this.service.AddCategory(this.category).subscribe(res=>
      {
        this.route.navigateByUrl('ADMIN')
      },err=>{
        console.log(err)
      })
      }
    }
    Delete(cid:number){
      this.service.DeleteCategory(cid).subscribe(res=>{
        console.log('Record deleted');
        this.route.navigateByUrl('ADMIN')
      },
      err=>{
        console.log(err);
      })
    }
    get f(){return this.categoryForm.controls;}
    onReset()
    {
      this.submitted=false;
      this.categoryForm.reset();
    }
}
