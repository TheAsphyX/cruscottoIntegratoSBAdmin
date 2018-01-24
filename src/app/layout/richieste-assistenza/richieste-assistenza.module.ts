import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RichiesteAssistenzaRoutingModule } from './richieste-assistenza-routing.module';
import { RichiesteAssistenzaComponent } from './richieste-assistenza.component';

import { InfoAggregateModule } from '../../shared';

@NgModule({
    imports: [CommonModule, RichiesteAssistenzaRoutingModule],
    declarations: [RichiesteAssistenzaComponent]
})
export class RichiesteAssistenzaModule {}
