/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

import {NameList} from 'dist/NameList';

@Component({
  selector: 'my-app'
})
@View({
        template: '<h1>Hello {{ name }}</h1> <input (keyup)="changeName(namebox.value)" #namebox value="{{name}}">'
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Pete';
    console.log(NameList.get());
  }

  changeName(newName) {
      this.name = newName;
  }

}

bootstrap(MyAppComponent);