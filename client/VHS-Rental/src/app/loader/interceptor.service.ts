import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService, public toasterService: ToastrService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loaderService.isLoading.next(true);
      return next.handle(req).pipe(
        finalize(
          () => {
            this.loaderService.isLoading.next(false)
          catchError((err: any) => {
              if(err instanceof HttpErrorResponse) {
                  try {
                      this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-top-center' });
                  } catch(e) {
                      this.toasterService.error('An error occurred', '', { positionClass: 'toast-top-center' });
                  } 
              }
              return of(err);
          });
          }
        )       
      )
  }
}
