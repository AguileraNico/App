import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITeams, IPositions, IFixture, IPromedios, IRound } from 'src/app/Core/domain/liga/liga';
import { Observable } from 'rxjs';
import { TeamsLigaBody, TeamsDivisionBody, TeamsFixtureBody } from 'src/app/Core/body/teams.body';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  protected headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getTeams(division: number): Observable<ITeams[]> {
    const body = new TeamsDivisionBody(division);
    this.headers = this.getHeaders();
    return this.http.post<ITeams[]>('http://localhost:5001/apuestas-276210/us-east1/liga/teams',
    body, { headers: this.headers });
  }

  getPositions(division: number): Observable<IPositions[]> {
    const body = new TeamsDivisionBody(division);
    this.headers = this.getHeaders();
    return this.http.post<IPositions[]>('http://localhost:5001/apuestas-276210/us-east1/liga/positions',
    body, { headers: this.headers });
  }

  getFixture(liga: number, division: number, round: number): Observable<IFixture[]> {
    const body = new TeamsFixtureBody(liga, division, round);
    this.headers = this.getHeaders();
    return this.http.post<IFixture[]>('http://localhost:5001/apuestas-276210/us-east1/liga/fixture',
    body, { headers: this.headers });
  }

  getLastRound(Liga: number, division: number): Observable<IRound> {
    const body = new TeamsLigaBody(Liga, division);
    this.headers = this.getHeaders();
    return this.http.post<IRound>('http://localhost:5001/apuestas-276210/us-east1/liga/last-round',
    body, { headers: this.headers });
  }

  getPromedios(division: number): Observable<IPromedios[]> {
    const body = new TeamsDivisionBody(division);
    this.headers = this.getHeaders();
    return this.http.post<IPromedios[]>('http://localhost:5001/apuestas-276210/us-east1/liga/promedios',
    body, { headers: this.headers });
  }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders()
    .set('Content-Type', 'application/json');
  }
}
