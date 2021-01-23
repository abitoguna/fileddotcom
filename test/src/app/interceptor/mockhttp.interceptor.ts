import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockHttpInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let res = Math.random();
    if (res > 0.49) {
      return new Observable(obs => {
        obs.next(new HttpResponse<Array<any>>({status: 200}));
        obs.complete();
      })
    } else {
      return next.handle(request);
    }



  }
}
