import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { url1 , headers } from './urlpath';

export interface ResData {
  status_code: number;
  status_message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getResponse(param:any): Observable<HttpResponse<ResData>> {
    return this.http
      .get<ResData>(url1(param), { observe: 'response', headers})
      .pipe(timeout(2500), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    // クライアント側あるいはネットワークによるエラー
    if (error.status === 0) {
      console.error('An error occurred:', error.error.message);
      // サーバー側から返却されるエラー
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // エラーメッセージの返却
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
