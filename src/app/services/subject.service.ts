import { Injectable } from '@angular/core';
import { Subject } from '../Subject';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    private apiUrl = 'http://localhost:3000/subjects'


constructor(private http: HttpClient) { }


getAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl)
  }

}
