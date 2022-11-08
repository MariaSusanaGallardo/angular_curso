import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        //que contiene este módulo, componentes
        HeroeComponent,
        ListadoComponent
    ],
    //que quiero que sea visible fuera de este módulo
    exports: [
        ListadoComponent
    ],
    //módulos 
    imports: [
        CommonModule
    ]
})
export class heroesModule {}
