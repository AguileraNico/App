import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserMatchBody, TeamsUserProdeBody, UserHistoryBody } from 'src/app/Core/body/prode.body';
import { AuthService } from '../Auth/auth.service';
import { IUserProde } from 'src/app/Core/domain/prode/prode';
import { IRound } from 'src/app/Core/domain/liga/liga';

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

  getUserFixture(Liga: number, division: number, round: number): Observable<IUserProde[]> {
    const body = new TeamsUserProdeBody(Liga, division, round, JSON.parse(localStorage.user).uid);
    this.headers = this.getHeaders();
    return this.http.post<IUserProde[]>('http://localhost:5001/apuestas-276210/us-east1/prode/user-fixture',
    body, { headers: this.headers });
  }

  getUserRound(Liga: number, division: number): Observable<IRound[]> {
    const body = new UserHistoryBody(Liga, division, JSON.parse(localStorage.user).uid);
    this.headers = this.getHeaders();
    return this.http.post<IRound[]>('http://localhost:5001/apuestas-276210/us-east1/prode/user-history',
    body, { headers: this.headers });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
    .set('Content-Type', 'application/json');
  }

}
