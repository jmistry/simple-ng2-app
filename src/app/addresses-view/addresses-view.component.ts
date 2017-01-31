import { Component, OnInit } from '@angular/core';
import {AddressesService} from "../addresses.service";
import {Address} from "../shared/domain/address";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-addresses-view',
  templateUrl: './addresses-view.component.html',
  styleUrls: ['./addresses-view.component.css']
})
export class AddressesViewComponent implements OnInit {
  addresses: Address[];

  @Input()
  num: Number = null;

  @Input()
  code: Number = null;

  @Input()
  street: String = null;

  constructor(private addressesService: AddressesService) {
    this.addresses= addressesService.getAdresses();
  }

  ngOnInit() {

  }

  addNewAddress(num,street,code){
    // this.addresses.push(<Address>{num: this.num, street: this.street, code: this.code});
    this.addresses.push(<Address>{num , street, code});
    this.num=null;
    this.street=null;
    this.code=null;
  }

}
