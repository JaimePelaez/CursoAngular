import { Country } from './../interface/pais.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string='https://restcountries.com/v2';

  constructor(private http:HttpClient) { }

  buscarpais(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
  }

  buscarcapital(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url)
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url =`${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)
  }

  buscarRegion(Region:string):Observable<Country[]>{
    const url =`${this.apiUrl}/regionalbloc/${Region}`
    return this.http.get<Country[]>(url)
  }
}
