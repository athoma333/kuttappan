import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduledFlight } from '../model/scheduled-flight';
import { SearchCriteria } from '../model/searchCriteria';

@Injectable({
  providedIn: 'root'
})

export class ScheduledFlightService {
  private SFurl: string= "http://localhost:8081/api/v1.0/flight/search";
  constructor(private http: HttpClient) { 
  }

  addScheduleFlight(scheduleFlight:ScheduledFlight,srcAirport: string,dstnAirport: string,deptDateTime: string,arrDateTime: string){
  
    let params = new HttpParams()
    .set('srcAirport', srcAirport)
    .set('dstnAirport', dstnAirport)
    .set('deptDateTime', deptDateTime)
    .set('arrDateTime', arrDateTime);
    console.log(scheduleFlight);
    console.log(params);
   console.log(scheduleFlight);
    return this.http.post('http://localhost:7092/scheduledFlight/add?',scheduleFlight,{params});
  }
  searchScheduledFlight(searchCriteria: SearchCriteria) {
    return this.http.get(  `${this.SFurl}/search`, searchCriteria );
  }

  showScheduleFlights(): Observable<any> {
    return this.http.get('http://localhost:9092/scheduledFlight/viewAll');
  }

  removeScheduleFlight(scheduleFlightId:number){
    return this.http.delete('http://localhost:9092/scheduledFlight/delete?flightId='+scheduleFlightId);
 }

 modifyScheduledFlight(scheduleFlight:ScheduledFlight){
   let mForm= new FormData();
   mForm.append("scheduleFlightId",String(scheduleFlight.scheduleFlightId))
   mForm.append("schedule",String(scheduleFlight.schedule))
   mForm.append("flight",String(scheduleFlight.flight))
   mForm.append("availableSeats",String(scheduleFlight.availableSeats))
   return this.http.put('http://localhost:7092/scheduledFlight/modify?',mForm);
 }

}
