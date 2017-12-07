import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './scheda-telefonata-routing.module';
import { SchedaTelefonataComponent } from './scheda-telefonata.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [SchedaTelefonataComponent]
})
export class SchedaTelefonataModule {}
