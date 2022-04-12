import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "https://hacker-news.firebaseio.com/v0/item/" ;

  constructor(private http : HttpClient) { }


//get task
list(id:number) : Observable<any>
{
  const url = this.url+id + '.json?print=pretty';
  return this.http.get(url).pipe(
    catchError(this.handleError)
  )
}


handleError(error : HttpErrorResponse)
{
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}


}
