import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionePermessiComponent } from './gestione-permessi.component';

const routes: Routes = [
    {
        path: '',
        component: GestionePermessiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestionePermessiRoutingModule {}
