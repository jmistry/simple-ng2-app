import { Injectable } from '@angular/core';
import {Address} from "./shared/domain/address";

@Injectable()
export class AddressesService {

  constructor() { }

  getAdresses(): Address[]{
    let list = new Array();
    list.push({ num: 18, street: 'Ostrich', code: 2501});
    list.push({ num: 2, street: 'Penguin', code: 2555});
    return list;
  }

}
