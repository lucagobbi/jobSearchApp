import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IJobOffer} from "../interfaces/IJobOffer";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  getJobOffers(page: number): Observable<IJobOffer[]> {
    let params = new HttpParams().set('page', page);
    return this.http.get<IJobOffer[]>(environment.apiUrl, {params: params});
  }

}
