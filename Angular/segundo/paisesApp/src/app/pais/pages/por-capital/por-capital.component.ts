import { Component } from '@angular/core';
import { Country } from './../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string='';
  paises:Country[]=[];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.termino=termino;
    this.paisService.buscarcapital(this.termino)
      .subscribe((paises) =>{
        this.paises=paises;
        console.log(paises);
      },(err)=> {
        console.log('Error');
        console.info(err);
      });
  }


}
