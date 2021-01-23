import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { AppState } from '../app.state';
import { CreditCard } from '../interfaces/credit-card.interface';
import * as CreditCardActions from "../actions/credit-card.actions";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getAllCards(): Observable<CreditCard[]> {
    return this.store.select('creditCard');
  }

  makePayment(data: CreditCard): Observable<any> {
    // Send to mock api
    return this.http.post('', data, { observe: 'response'}).pipe(
      map(res => {
        if (res.status === 200) {
          // save if response is 200;
          this.store.dispatch(new CreditCardActions.AddCreditCard(data));
        }
      })
    )
  }
}
