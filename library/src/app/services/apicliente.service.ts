import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';
import { Book } from '../models/book';
import { Token } from '../models/token';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  urlFakerestApi: string = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';
  url : string = 'https://localhost:44355/api/';
  constructor(
    private http: HttpClient
  ) { }

  getBooksFakeApi(): Observable<Book>{
    return this.http.get<Book>(this.urlFakerestApi+"/v1/Books")
  }

  getAuthorsFakeApi(): Observable<Author>{
    return this.http.get<Author>(this.urlFakerestApi+"/v1/Authors")
  }

  getBooksLocalApi(): Observable<Book>{
    return this.http.get<Book>(this.url+"Books")
  }

  getAuthorsLocalApi(): Observable<Author>{
    return this.http.get<Author>(this.url+"Authors")
  }

  getSyncUp():Observable<any>{
    return this.http.get(this.url)
  }
}
