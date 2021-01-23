import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { CreditCard } from "../interfaces/credit-card.interface";


export const ADD_CREDITCARD = '[CreditCard] Add'

export class AddCreditCard implements Action {
  readonly type = ADD_CREDITCARD;

  constructor(public payload: CreditCard) {}
}

export type Actions = AddCreditCard;
