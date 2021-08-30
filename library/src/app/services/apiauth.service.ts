import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "../models/token";
import { User } from "../models/user";

const httpOption ={
    headers : new HttpHeaders({
        'Contend-Type': 'text/plain'
    })
};

@Injectable({providedIn:'root'})
export class ApiauthService{
    url: string = 'https://localhost:44355/api/Login';
    constructor(private http:HttpClient)
    {}

    login(user : User): Observable<object>{
        return this.http.post<object>(this.url, user, httpOption)
  }

}