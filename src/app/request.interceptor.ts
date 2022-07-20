import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private Loaderservice:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.Loaderservice.show();

    return next.handle(request).pipe(
      finalize(() => this.Loaderservice.hide()),
);
  }
  
}
