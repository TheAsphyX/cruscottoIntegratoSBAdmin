import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposizionePartenzaRoutingModule } from './composizione-partenza-routing.module';
import { ComposizionePartenzaComponent } from './composizione-partenza.component';

import { InfoAggregateModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ComposizionePartenzaRoutingModule],
    declarations: [ComposizionePartenzaComponent]
})
export class ComposizionePartenzaModule {}
