import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'scheda-contatto-page',
    templateUrl: './scheda-contatto.component.html',
    styleUrls: ['./scheda-contatto.component.scss'],
    animations: [routerTransition()]
})
export class SchedaContattoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
