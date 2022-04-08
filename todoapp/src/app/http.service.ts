import { getNgModuleById, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, observable  } from 'rxjs';
import { throwError } from 'rxjs';
import { todos } from './todo';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "http://localhost:3000/todos" ;

  hdr = new HttpHeaders().set('Content-Type' , 'application/json')

  constructor(private http : HttpClient) { }

//create
create(data : todos) : Observable<any>
{
  return this.http.post(this.url , data)
  .pipe(
    catchError(this.handleError)
  )
}

//list
list()
{
  return this.http.get(this.url);
}

//get single task
getTask(id:any) : Observable<any>
{
  const url = this.url+'/'+id;
  return this.http.get(url).pipe(
    catchError(this.handleError)
  )
}

//delete
delete(id: any) : Observable<any>
{
  const url = this.url+'/'+id;
  return this.http.delete(url).pipe(
    catchError(this.handleError)
  )
}

//edit
edit(id: any , data :any) : Observable<any>
{
  const url = this.url+'/'+id;
  return this.http.put(url , data ,  { headers: this.hdr }).pipe(
    catchError(this.handleError)
  )
}

//error
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
