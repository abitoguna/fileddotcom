import { Action } from "@ngrx/store";
import { CreditCard } from "../interfaces/credit-card.interface";
import * as CreditCardActions from "../actions/credit-card.actions";

export function reducer(
  state: CreditCard[] = [],
  action: CreditCardActions.Actions
) {
  switch(action.type) {
    case CreditCardActions.ADD_CREDITCARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
