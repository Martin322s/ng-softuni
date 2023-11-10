import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  apiUrl: string = 'http://localhost:3030';
  user: any = localStorage.getItem('session');
  token: string = JSON.parse(this.user)?.accessToken;

  constructor(private http: HttpClient) {
    console.log(JSON.parse(this.user).accessToken);
    
  }

  getAll() {
    return this.http.get(`${this.apiUrl}/data/facts?sortBy=_createdOn%20desc`);
  }

  getOne(id: string | undefined) {
    return this.http.get(`${this.apiUrl}/data/facts/${id}`);
  }

  createOne(factData: NgForm) {
    return this.http.post(`${this.apiUrl}/data/facts`, factData, {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.token
      }
    })
  }
}
