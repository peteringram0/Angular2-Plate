import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	template: '<h1>My first Angular 2 App</h1>'
})
// Component controller
class AppComponent {

}

bootstrap(AppComponent);