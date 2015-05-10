/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

import {NameList} from './NameList';

import{_} from 'lodash';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>Hello {{ name }}</h1> <input (keyup)="changeName(namebox.value)" #namebox value="{{name}}">'
})

// Component controller
class MyAppComponent {

    name:string;

    constructor() {
        this.name = 'Pete';

        console.log(NameList.get());

        console.log(_.difference([1, 2, 3], [4, 2]));

    }

    changeName(newName) {
        this.name = newName;
    }

}

bootstrap(MyAppComponent);