import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  constructor() { }

  heroes: string[] = ['Spiderman','Ironaman','Hulk','Thor','Cap. América'];
  heroeBorrado : string = "";

  borrarHeroe() : void {
    console.log("borrando...");
    this.heroeBorrado =  this.heroes.shift() || '';
  }


}
