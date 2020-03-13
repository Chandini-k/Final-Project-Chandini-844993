import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
sid:number
  constructor(private route:Router) {
    if(localStorage.getItem('Sid')==null)
    {
      this.route.navigateByUrl('HOME')
    }
    this.sid=JSON.parse(localStorage.getItem('Sid'))
   }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('HOME');
  }
}
