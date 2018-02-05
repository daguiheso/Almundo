import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(params?): Observable<HttpResponse<any>> {
    if (params) {
      return this.http.get('http://localhost:3000/api/hotels', {
        observe: 'response',
        params: new HttpParams().set(params.name, params.query)
      })
    }
    return this.http.get('http://localhost:3000/api/hotels', { observe: 'response'})
  }

}
