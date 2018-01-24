import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'richieste-assistenza',
    templateUrl: './richieste-assistenza.component.html',
    styleUrls: ['./richieste-assistenza.component.scss'],
    animations: [routerTransition()]
})
export class RichiesteAssistenzaComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
