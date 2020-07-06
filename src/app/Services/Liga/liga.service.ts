import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITeams, IPositions, IFixture, IPromedios } from 'src/app/Core/domain/teams/liga';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';
import { TeamsBody } from 'src/app/Core/body/teams.body';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  headers: HttpHeaders;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getTeams(division: number): Observable<ITeams[]> {
    const body = new TeamsBody(division);
    this.headers = this.getHeaders();
    return this.http.post<ITeams[]>('http://localhost:5001/apuestas-276210/us-east1/liga/teams',
    body, { headers: this.headers });
  }

  getPositions(division: number): Observable<IPositions[]> {
    const body = new TeamsBody(division);
    this.headers = this.getHeaders();
    return this.http.post<IPositions[]>('http://localhost:5001/apuestas-276210/us-east1/liga/positions',
    body, { headers: this.headers });
  }

  getFixture(division: number): Observable<IFixture[]> {
    const body = new TeamsBody(division);
    this.headers = this.getHeaders();
    return this.http.post<IFixture[]>('http://localhost:5001/apuestas-276210/us-east1/liga/fixture',
    body, { headers: this.headers });
  }

  getPromedios(division: number): Observable<IPromedios[]> {
    const body = new TeamsBody(division);
    this.headers = this.getHeaders();
    return this.http.post<IPromedios[]>('http://localhost:5001/apuestas-276210/us-east1/liga/promedios',
    body, { headers: this.headers });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
    .set('Content-Type', 'application/json');
  }
}
