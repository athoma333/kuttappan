import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight1.component';
import { Flight2ServiceService } from '../services/flight2-service.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight : Flight =new Flight();
  submitted=false;
  constructor(private flightService: Flight2ServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newFlight(): void{
    this.submitted=false;
    this.flight=new Flight();
  }
  save() {
    console.log(this.flight);
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
