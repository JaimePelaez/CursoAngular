import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent{
  /* personajes:Personaje[]=[];
  opción uno para asignar los personajes al componente personajes utilizando servicios
  pero no es optima ya que son los servivios quien deben manejar estos datos */
  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000 
  };

 /*  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  } */

  /* get personajes():Personaje[]{
    return this.dbzService.personajes;
    opción Dos para asignar los personajes al componente personajes utilizando servicios
    pero no es optima ya que son los servivios quien deben manejar estos datos 
  } */
  constructor(private dbzService:DbzService){
    /* this.personajes=this.dbzService.personajes
    opción uno para asignar los personajes al componente personajes utilizando servicios
    pero no es optima ya que son los servivios quien deben manejar estos datos */
  }

    /* cambiarNombre(event:any){
      console.log(event.target.value);
    } */
}
