import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSchedeRoutingModule } from './lista-schede-routing.module';
//import { ListaSchedeModule } from './lista-schede.module';
import { ListaSchedeComponent } from './lista-schede.component';

//import { InfoAggregateModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ListaSchedeRoutingModule],
    declarations: [ListaSchedeComponent]
})
export class ListaSchedeModule {}