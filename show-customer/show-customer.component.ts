import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customer : Customer[];
  message : string;
  constructor(private service : FCropServiceService) { }

  ngOnInit() {
    this.service.getallCustomersbyAdmin()
    .then(res => {
      this.customer = res;
    })
    .catch(err=>this.message=err[0].message);
  }


}
