import { Component, OnInit } from '@angular/core';
import {User} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchant-welcome',
  templateUrl: './merchant-welcome.component.html',
  styleUrls: ['./merchant-welcome.component.css']
})
export class MerchantWelcomeComponent implements OnInit {

  modelMerchant: User = {
    username:'vijivaishali',
    password:'',
    email:'vaishali@gmail.com',
    phone:1234567890,
    firstname:'viji',
    lastname:'vaishali',
    address:'chennai',
    merchant:true
  };

  constructor(private router:Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("userData")==null) {
      this.router.navigate(['login']);
    }

    let userData = JSON;
    console.log(userData);
    Object.assign(this.modelMerchant,userData);
  }


  clearLocal(){
    sessionStorage.clear();
  }

}
