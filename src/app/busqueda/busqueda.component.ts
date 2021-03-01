import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CampeonService } from './../service/campeon.service';
import { Campeon } from './../campeon/Campeon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public nombreInput: string = "";
  public c1 : Campeon;
  public datos: Array<any>=[];
  constructor(private _campeonService: CampeonService) { 
    this.c1 = new Campeon("" , "" , "");
    
  }

  ngOnInit(): void {
  }
  obtenerCampeon(){
    this.c1.imagen = this._campeonService.cogerImagen(this.nombreInput);
    this._campeonService.obtener(this.nombreInput).subscribe(
      data=>{this.c1.nombre = data['data'][this.nombreInput]['name'];
      this.c1.titulo = data['data'][this.nombreInput]['title'];
      console.log(this.datos);},
      error=>{
        var errorMessage = error as any;
        console.log(errorMessage);
      }
    );
  }

}
