import { Component, OnInit } from '@angular/core';
import {JobService} from "../service/job.service";
import {IJobOffer} from "../interfaces/IJobOffer";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {

  constructor(private jobService: JobService) { }

  jobOffers: IJobOffer[] = [];

  showJobs(): void{
    this.jobService.getJobOffers(1)
      .pipe(
        map((jobsPage: any)=> {
          this.jobOffers = jobsPage.results
        })
      )
  }

  ngOnInit(): void {
  }

}
