import {Component} from '@angular/core';
import {ClickMeComponent} from './click-me.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ClickMeComponent
    ]
})
export class AppComponent { }
