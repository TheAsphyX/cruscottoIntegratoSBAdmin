import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedaTelefonataComponent } from './scheda-telefonata.component';

const routes: Routes = [
    {
        path: '',
        component: SchedaTelefonataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule {}
