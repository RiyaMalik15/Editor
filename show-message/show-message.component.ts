import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  contact : Contact[];
  message : string;
  constructor(private service : FCropServiceService) { }

  ngOnInit() {
    this.service.getallMessagesbyAdmin()
    .then(res => {
      this.message = res;
    })
    .catch(err=>this.message=err[0].message);
  }
}
