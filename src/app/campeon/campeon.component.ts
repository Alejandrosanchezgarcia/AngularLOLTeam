import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CampeonService } from './../service/campeon.service';
import { Campeon } from './Campeon';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styleUrls: ['./campeon.component.css']
})
export class CampeonComponent implements OnInit {
  public arrNamePos : Array<any> = ['TOP', 'JUNGLE', 'MID','ADC','SUPPORT'];
  public posElegida : number = 0;
  public arrPos : Array<any> = [0,1,2,3,4];
  public arrCamp : Array<Campeon> = [new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", ""),new Campeon("", "", "")];
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
  insertar(n: number){
    this._campeonService.seleccionar(new Campeon(this.c1.nombre, this.c1.titulo, this.c1.imagen), n);
    this.arrCamp = this._campeonService.devolverTeam();
    console.log(this._campeonService.team);
  }
  radioChangeHandler(event: any){
    this.posElegida = event.target.value;
    
  }
  eliminar(): void{
    window.location.reload();
  }


}
