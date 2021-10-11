import { Country } from './../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino:string='';
  hayError: boolean=false;
  paises:Country[]=[];
  constructor(private paisService: PaisService) { }
  buscar(termino: string){
    this.termino=termino;
    this.paisService.buscarpais(this.termino)
      .subscribe((paises) =>{
        this.paises=paises;
        console.log(paises);
      },(err)=> {
        console.log('Error');
        console.info(err);
      });
  }
}
