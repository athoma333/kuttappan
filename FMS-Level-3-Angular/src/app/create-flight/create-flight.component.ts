import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.component';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';
import { Airline } from '../model/airline.component';
import { Seat } from '../model/seat.component';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
flight : Flight = {id: null, flightNo: null, fromPlace: "", toPlace: "", startDate: "",
	 	startTime: "", endDate: "", endTime: "", airline:null, seats: [ ]};
airline : Airline=new Airline();
seats: Seat=new Seat();
submitted=false;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(){
  }
  newFlight(): void{
    this.submitted=false;
    this.flight=new Flight();
  }
  save() {
    this.flight.airline = this.airline;
    this.flight.seats.push(this.seats);
    this.flightService.addFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new Flight();
    this.gotoList();
  }

  onSubmit() {
    this.submitted=true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}

