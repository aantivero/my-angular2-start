import {Component} from '@angular/core';
import {ClickMeComponent} from './click-me.component';
import {ClickMeComponent2} from './click-me2.component';
import {KeyUpComponent_v1} from './keyup.components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ClickMeComponent,
        ClickMeComponent2,
        KeyUpComponent_v1
    ]
})
export class AppComponent { }
