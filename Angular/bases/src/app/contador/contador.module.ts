import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
})
export class ContadorMudule{

}