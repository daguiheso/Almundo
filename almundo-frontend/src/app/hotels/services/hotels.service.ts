import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:3000/api/hotels', { observe: 'response'})
  }

}
