import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionePermessiRoutingModule } from './gestione-permessi-routing.module';
import { GestionePermessiComponent } from './gestione-permessi.component';

@NgModule({
    imports: [CommonModule, GestionePermessiRoutingModule],
    declarations: [GestionePermessiComponent]
})
export class GestionePermessiModule {}
