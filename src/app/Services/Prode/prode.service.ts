import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserMatchBody } from 'src/app/Core/body/prode.body';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProdeService {
  protected headers: HttpHeaders;

  constructor(private http: HttpClient, private auth: AuthService) { }

  saveMatch(tournamentCd: number, matchCd: number, localGoal: number, visitorGoal: number): Observable<any> {
    const body = new UserMatchBody(tournamentCd, matchCd, this.auth.user.uid, localGoal, visitorGoal);
    this.headers = this.getHeaders();
    return this.http.post<any>('http://localhost:5001/apuestas-276210/us-east1/prode/save-user-match',
    body, { headers: this.headers });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
    .set('Content-Type', 'application/json');
  }

}
