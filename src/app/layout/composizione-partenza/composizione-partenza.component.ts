import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'composizione-partenza-page',
    templateUrl: './composizione-partenza.component.html',
    styleUrls: ['./composizione-partenza.component.scss'],
    animations: [routerTransition()]
})
export class ComposizionePartenzaComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
