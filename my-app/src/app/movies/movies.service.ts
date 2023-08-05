import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, of, timer, interval } from 'rxjs';
import { catchError, retryWhen, timeout } from 'rxjs/operators';

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
  getResponse(): Observable<HttpResponse<ResData>> {
    const headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWUwNzhiMmQ5Mjg4YWMzMWE2NThkNzAzNmQzNzJmYSIsInN1YiI6IjY0Y2U1YzA1NGQ2NzkxMDEzOWVlMDIyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Wx-Ezz67V6JInCIDSOCnkA9H0seIBhpOupm_Amj4Co',
    };
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    return this.http
      .get<ResData>(url, { observe: 'response', headers})
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
