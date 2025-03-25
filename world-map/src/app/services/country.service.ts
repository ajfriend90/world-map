import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CountryData } from '../models/country-data.model';
@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryData(code: string): Observable<CountryData | null> {
    const url = `https://api.worldbank.org/v2/country/${code}?format=json`;
    return this.http.get<any[]>(url).pipe(
      map(res => res[1] ? res[1][0] as CountryData : null)
    );
  }
}
