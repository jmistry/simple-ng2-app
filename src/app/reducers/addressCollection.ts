import * as addressCollection from '../actions/addresscollection';
import {Address} from "../shared/domain/address";
import {AddressesService} from "../addresses.service";


export interface State {

  addresses: Address[]
};

const initialState: State = {
  addresses: (new AddressesService()).getAdresses()
};

export function reducer(state = initialState, action: addressCollection.Actions): State {
  switch (action.type) {
    case

    addressCollection.ActionTypes.ADD_ADDRESS:

      return Object.assign({}, state, {
        addresses: [...state.addresses, action.payload]
      });

    case addressCollection.ActionTypes.REMOVE_ADDRESS:
      let newList = [];
      for (let counter = 0; counter < state.addresses.length; counter++) {
        if (counter != action.payload) {
          newList.push(state.addresses[counter]);
        }
      }
      return Object.assign({}, state, {addresses: newList});

    default: {
      return state;
    }
  }
}


export const getAddresse = (state: State) => state.addresses;
