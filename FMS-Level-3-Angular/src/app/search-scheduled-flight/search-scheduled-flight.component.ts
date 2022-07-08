import { Component, OnInit } from '@angular/core';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';
import { Router } from '@angular/router';
import { SearchCriteria } from '../model/searchCriteria';
import { Flight } from '../model/flight.component';

@Component({
  selector: 'app-search-scheduled-flight',
  templateUrl: './search-scheduled-flight.component.html',
  styleUrls: ['./search-scheduled-flight.component.css']
})
export class SearchScheduledFlightComponent implements OnInit {
  searchCriteria:SearchCriteria={startDate:"", startTime:"", fromPlace:"",toPlace:""};
  flight:Flight = new Flight();
  show:boolean=false;

  constructor(private service: ScheduledFlightService, private router: Router) { }

  ngOnInit(): void {
  }

  searchScheduleFlight():any{
    this.show=true;
    console.log(this.searchCriteria);
    this.service.searchScheduledFlight(this.searchCriteria).subscribe((searchCriteria:SearchCriteria)=>this.searchCriteria=searchCriteria);
}

idValid:boolean=false;
validateId(){
    if(this.scheduleFlightId>999){
        this.idValid=true;
    }
    else if(this.scheduleFlightId<1){
        this.idValid=true;
    }else{
        this.idValid=false;
    }
}

    add(){

        this.router.navigate(['/scheduledFlight/add']);

    }

    view(){

        this.router.navigate(['/scheduledFlight/show']);

    }

    search(){

        this.router.navigate(['/scheduledFlight/search']);

    }


}
