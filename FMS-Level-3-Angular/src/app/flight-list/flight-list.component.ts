import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Flight } from '../model/flight1.component';
import { Flight2ServiceService } from '../services/flight2-service.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights:Observable<Flight[]>;
  constructor(private flightService: Flight2ServiceService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.viewAllFlight();
  }
  removeFlight(flightNo: number)
  {
    this.flightService.removeFlight(flightNo)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
  }
  flightDetails(flightNo:number)
  {
    this.router.navigate(['flightDetails',flightNo]);
  }
  modifyFlight(flightNo: number)
  {
    this.router.navigate(['updateFlight',flightNo]);
  }
}
