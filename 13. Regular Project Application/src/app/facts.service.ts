import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  apiUrl: string = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}/data/facts?sortBy=_createdOn%20desc`);
  }
}
