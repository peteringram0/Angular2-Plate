# Angular-Plate

[ ![Codeship Status for peteringram0/Angular2-Plate](https://codeship.com/projects/ba7d7380-d63e-0132-8045-0ebaa675b5e0/status?branch=master)](https://codeship.com/projects/78306)

Angular 2 Boilerplate.

This is a small simple repo to get setup and started with Angular2.

* Package management with JSPM
* ES6 Module import with systemJS
* Written in Typescript & ES6
* Lodash


![alt tag](https://38.media.tumblr.com/tumblr_mb0zznFwl21r1mtsdo1_400.gif)

Step 1: (Install dependencies)
```shell
npm install jspm live-server tsd typescript@^1.5.0-beta -g
jspm install
````

Step 2: (Setup Angular TS definitions (will create 'typings' dir))
```shell
tsd query angular2 --action install
````

Step 3: (Watch for changes and open a new terminal and start live server)
```shell
tsc -w
live-server
````