import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private service : FCropServiceService, private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
    if(confirm("Are You Sure You Want To Exit "))
    {
      this.service.status=false;
      this.router.navigate(['../'])

    }
  }
}
