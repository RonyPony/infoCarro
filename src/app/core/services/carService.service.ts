import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

constructor(private http:HttpClient) { }

  getVimWithYear(vim:string,year:string) {
    //https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVinValues/5UXWX7C5*BA?format=json&modelyear=2011
    var result = this.http.get<Car>(`https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVinValues/${vim}?format=json&modelyear=${year}`)
    return result;
  }
}
