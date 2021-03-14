import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/heros.model';
import { Top3 } from '../models/top.model';
import { Editoras } from '../models/editoras.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHeros(){
    return this.http.get<Hero[]>('https://editoras-api.herokuapp.com/api/heros');
  }

  getEditoras(){
    return this.http.get<Editoras[]>('http://editoras-api.herokuapp.com/api/editoras');
  }

  getTop3(id){
    return this.http.get<Top3[]>(`https://editoras-api.herokuapp.com/api/top-heros/${id}`);
  }

  getHeroById(id){
    return this.http.get<Hero[]>(`https://editoras-api.herokuapp.com/api/heros/${id}`)
  }

}