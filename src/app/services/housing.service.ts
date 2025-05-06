import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './../models/location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/locations';

  getAllHousingLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl);
  }

  getHousingLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}/${id}`);
  }
}
