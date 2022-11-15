import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Figure} from "./figure";
import {Set} from "./set";


@Injectable({
  providedIn: 'root'   //Service kann von allen Komponenten innerhalb des Root-Moduls genutzt werden
})
export class MyService {
  baseUrl = 'http://localhost:3000/allfigure'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Figure[]>{
    return this.http.get<Figure[]>(this.baseUrl); //Aufruf der get()-Funktion von HttpClient
  }
}
