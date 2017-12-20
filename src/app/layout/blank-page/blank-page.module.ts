import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import { InfoAggregateModule } from '../../shared';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, InfoAggregateModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
