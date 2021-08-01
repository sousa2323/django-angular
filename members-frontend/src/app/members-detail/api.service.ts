import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token fa695fa9d2c6e7373163da57f9a6a10de74f91e6'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  }; 
  
  updateMember(member) : Observable<any> {
    let body = { name: member.name, surname: member.surname, phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders});
  };

  deleteMember(id) : Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };
}
