import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Campeon } from '../campeon/Campeon';

@Injectable({
  providedIn: 'root'
})
export class CampeonService {
  public url: string;
  public urlImagen: string;
  public team: Array<Campeon>=[new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", "")];
  constructor(private http: HttpClient) {
    this.url = "http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json";
    this.urlImagen = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
   }
   obtener(nombre: string): Observable<any>{
      return this.http.get(this.url);
   }

   seleccionar(camp: Campeon, n:number){

     this.team[n]=camp;
   }

   cogerImagen(nombre: string): any{
     this.urlImagen = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
     this.urlImagen = this.urlImagen + nombre + "_0.jpg";
     return this.urlImagen;
   }
   devolverTeam(){
     return this.team;
   }
   
}
