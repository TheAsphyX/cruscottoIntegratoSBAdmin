import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedaContattoRoutingModule } from './scheda-contatto-routing.module';
import { SchedaContattoComponent } from './scheda-contatto.component';

import { InfoAggregateModule } from '../../shared';

@NgModule({
    imports: [CommonModule, SchedaContattoRoutingModule, InfoAggregateModule],
    declarations: [SchedaContattoComponent]
})
export class SchedaContattoModule {}
