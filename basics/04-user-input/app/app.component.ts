import {Component} from '@angular/core';
import {ClickMeComponent} from './click-me.component';
import {KeyUpComponent_v1} from './keyup.components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ClickMeComponent,
        KeyUpComponent_v1
    ]
})
export class AppComponent { }
