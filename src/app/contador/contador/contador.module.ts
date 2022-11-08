
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';



@NgModule({
    declarations: [
        //que contiene este módulo, componentes
        ContadorComponent

    ],
    //que quiero que sea visible fuera de este módulo
    exports: [
        ContadorComponent
        
    ],
    //módulos 
    imports: [

    ]
})
export class ContadorModule {}
