import { Component, OnInit } from '@angular/core';
import {Address} from "../shared/domain/address";
import {Input} from "@angular/core/src/metadata/directives";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';
import {AddAddressAction, RemoveAddressAction} from "../actions/addresscollection";
import {Observable} from "rxjs";

@Component({
  selector: 'app-addresses-view',
  templateUrl: './addresses-view.component.html',
  styleUrls: ['./addresses-view.component.css']
})
export class AddressesViewComponent implements OnInit {
  addresses$: Observable<Address[]>;

  @Input()
  num: Number = null;

  @Input()
  code: Number = null;

  @Input()
  street: String = null;

  constructor(private store: Store<fromRoot.State>) {
    this.addresses$ = store.select(fromRoot.getAddressesCollection);
  }

  ngOnInit() {

  }

  addNewAddress(num,street,code){
    let newAddress = <Address>{num , street, code};
    this.store.dispatch(new AddAddressAction(newAddress));
    // this.addresses.push(newAddress);
    this.num=null;
    this.street=null;
    this.code=null;
  }

  removeAddress (index: number){
    this.store.dispatch(new RemoveAddressAction(index));
  }

}
