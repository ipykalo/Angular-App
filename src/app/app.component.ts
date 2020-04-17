import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-app';

    signedIn: boolean;
    user: any;
    greeting: string;

    constructor( private amplifyService: AmplifyService ) {
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                debugger
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    this.user = authState.user;
                    this.greeting = "Hello " + this.user.username;
                }
        });
    }
}
