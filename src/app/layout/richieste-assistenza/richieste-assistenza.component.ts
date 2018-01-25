import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { SintesiRichiesta } from "../../shared/modules/rich-ass/sintesi-richiesta/sintesi-richiesta.model";
import { SintesiRichiesteService } from "../../shared/modules/rich-ass/sintesi-richieste-service/sintesi-richieste.service";


@Component({
    selector: 'richieste-assistenza',
    templateUrl: './richieste-assistenza.component.html',
    styleUrls: ['./richieste-assistenza.component.scss'],
    animations: [routerTransition()]
})
export class RichiesteAssistenzaComponent implements OnInit {
    private richieste: SintesiRichiesta[] = [];

    constructor(private sintesiRichiesteService: SintesiRichiesteService) {}

    ngOnInit() {
        this.sintesiRichiesteService.getSintesiRichieste()
      .subscribe(richieste => {
        console.log("Richieste service: ", richieste);
        this.richieste = richieste;
      });
    }

    showDettagliRicevuto(richiesta: SintesiRichiesta): void {
        console.log("Sono app.component. Vogliono vedere i dettagli di", richiesta.id);
      }
}
