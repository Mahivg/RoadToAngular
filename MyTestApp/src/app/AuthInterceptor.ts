import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
} from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let newReq = req.clone({
      headers: new HttpHeaders({
        authToken: "kjhekjbfuihrlsdmlsdmlmopekpcmr",
      }),
    });

    return next.handle(newReq);
  }
}
