import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Flight2ServiceService {
  private Url = 'http://localhost:7090/api/v1.0/flight';
  constructor(private http: HttpClient) { }
  viewFlight(flightNo: number): Observable<any> {
    return this.http.get(`${this.Url}/viewFlight/${flightNo}`);
  }
//DONE
  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addFlight`, flight);
  }

  modifyFlight(flightNo: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/updateFlight`, value);
  }

  removeFlight(flightNo: number): Observable<any> {
    return this.http.delete(`${this.Url}/deleteFlight/${flightNo}`, { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/search`);
  }

}
