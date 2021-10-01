import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroeBorrado:string='';
  heroes:string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];


  borrarHeroe(){
    this.heroeBorrado= this.heroes.shift() || '';
    /* Como el metodo shift devuelve un string
    o un undefined se le pone o string vacio
     por que heroe borrado solo recibe string */
  }
}
