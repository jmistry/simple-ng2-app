import { Component, OnInit } from '@angular/core';
import {AddressesService} from "../addresses.service";
import {Address} from "../shared/domain/address";

@Component({
  selector: 'app-addresses-view',
  templateUrl: './addresses-view.component.html',
  styleUrls: ['./addresses-view.component.css']
})
export class AddressesViewComponent implements OnInit {
  addresses: Address[];

  constructor(private addressesService: AddressesService) {
    this.addresses= addressesService.getAdresses();
  }

  ngOnInit() {

  }

  addNewAddress(num: Number, street: String, code: Number){
    this.addresses.push({num, street, code});
    this.num=null;
    this.street=null;
    this.code=null;
  }

}
