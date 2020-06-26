import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITeams } from 'src/app/Core/domain/teams/teams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<ITeams[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ITeams[]>('https://us-east1-apuestas-276210.cloudfunctions.net/teams', '', { headers });
  }
}
