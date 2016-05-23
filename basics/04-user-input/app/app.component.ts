import {Component} from '@angular/core';
import {ClickMeComponent} from './click-me.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <p><click-me></click-me></p>`,
    directives: [
        ClickMeComponent
    ]
})
export class AppComponent { }
