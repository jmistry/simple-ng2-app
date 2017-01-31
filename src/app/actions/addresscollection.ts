import { Action } from '@ngrx/store';
import {Address} from "../shared/domain/address";
import {type} from "../../util";


export const ActionTypes = {
  ADD_ADDRESS:  type('[Collection] Add Address'),
  REMOVE_ADDRESS: type('[Collection] RemoveAddress')
};


/**
 * Add Book to Collection Actions
 */
export class AddAddressAction implements Action {
  type = ActionTypes.ADD_ADDRESS;

  constructor(public payload: Address) { }
}

/**
 * Add Book to Collection Actions
 */
export class RemoveAddressAction implements Action {
  type = ActionTypes.REMOVE_ADDRESS;

  constructor(public payload: number) { }
}




export type Actions = AddAddressAction | RemoveAddressAction;
