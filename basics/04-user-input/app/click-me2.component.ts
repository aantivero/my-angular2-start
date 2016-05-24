import {Component} from '@angular/core';

@Component({
    selector: 'click-me2',
    template: `
    <button (click)="onClickMe2($event)">Click Me 2</button>
    {{clickMessage}}
    `
})
export class ClickMeComponent2 {
    clickMessage = '';
    clicks = 1;
    
    onClickMe2(event: any) {
        let evtMsg = event ? ' Event target is ' + event.target.tagName : '';
        this.clickMessage = (`Click #${this.clicks++}.${evtMsg}`);
    }
}