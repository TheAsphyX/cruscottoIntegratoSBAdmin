import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormChiamataRoutingModule } from './form-chiamata-routing.module';
import { FormChiamataComponent } from './form-chiamata.component';

@NgModule({
    imports: [CommonModule, FormChiamataRoutingModule],
    declarations: [FormChiamataComponent]
})
export class FormChiamataModule {}
