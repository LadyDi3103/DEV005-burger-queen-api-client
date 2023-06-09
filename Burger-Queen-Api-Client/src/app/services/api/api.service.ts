import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  constructor(private http: HttpClient) {}
// crear función método para llamar al endpoint api  luego llamar en cada componente.
  getCredentials():Observable<Credential[]>{   
    return this.http.get('https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0#/').pipe(map((resp:any)=> {
      return resp.results as Credential[]
    }))
   }
}
