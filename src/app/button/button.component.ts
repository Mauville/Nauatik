import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

// A bad attempt at a button animation. I hate animating

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    animations: [
        trigger('buttonState', [
            state('active', style({
                color: '#384C1C',
            })),
            state('inactive', style({
                backgroundColor: '#496225',
            })),
            transition('inactive <=> active', animate('100ms ease-in')),
        ])
    ]
})
export class ButtonComponent implements OnInit {

    state = 'inactive';

    @Input() buttonConfig: any;

    constructor() {
    }

    toggleState(): void {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    ngOnInit(): void {
    }

}
