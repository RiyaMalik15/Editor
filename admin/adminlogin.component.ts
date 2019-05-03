import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FCropServiceService } from '../fcrop-service.service';
import { Customer } from '../model/Customer';
import { Session } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  successMessage : string;
  errorMessage : string;
  adminForm : FormGroup;
  constructor(private fb : FormBuilder, private service : FCropServiceService, private router : Router) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }


  loginAdmin(){
    this.successMessage = null;
    this.errorMessage = null;
    this.service.loginAdmin(this.adminForm.value)
    .then(res => {
      this.router.navigate(['adminHome',res.username]);
      this.service.status=true;
    })
    .catch((err) => {this.errorMessage = err.message
    alert("Login Failed!!")
    })
  }

}
