import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight1.component';
import { Flight2ServiceService } from '../services/flight2-service.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  flightNo: number;
  flight: Flight;
  constructor(private route: ActivatedRoute,private router: Router,
    private flightService: Flight2ServiceService) { }

  ngOnInit(){
    this.flight=new Flight();
    this.flightNo=this.route.snapshot.params['flightNo'];
    this.flightService.viewFlight(this.flightNo)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
  }

  modifyFlight() {
    this.flightService.modifyFlight(this.flightNo, this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight = new Flight();
    this.gotoList();
  }

  onSubmit() {
    this.modifyFlight();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}

