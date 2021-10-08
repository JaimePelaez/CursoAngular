import { DbzService } from '../services/dbz.service';
import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  /* @Input() personajes:Personaje[]=[]
  ya no se necesita la comunicación de padre a hijo ya que se utilizan los services */
  
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:DbzService){
    
  }

  

}
