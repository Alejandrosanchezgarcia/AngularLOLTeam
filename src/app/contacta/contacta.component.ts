import { Component, OnInit } from '@angular/core';
import { Campeon } from './../campeon/Campeon';


@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent implements OnInit {
  public c2: Campeon;

  public nombre: string = "";
  public titulo: string = "";
  public descri: string = "";
  constructor() { 
    this.c2 = new Campeon("", "", "");
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.c2);
  }
 

}
