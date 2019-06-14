# LickAppWidgetListTask

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        tasks : Task[] = [{
          "id": Math.floor(Math.random() * 1000).toString(),
          "even": false,
          "assignedToName": "Patricia Morris",
          "isPastDate": false,
          "started": false,
          "draft": false,
          "deleted": false,
          "name": "Schedule Follow-up Meeting",
          "status": "Completed",
          "type": "fa fa-calendar",
          "shared" : false,
          "lastUpdated" : new Date(),
          "publishedAt" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "even": false,
          "assignedToName": "Bethany Franks",
          "isPastDate": false,
          "started": true,
          "draft": false,
          "deleted": false,
          "name": "Call Doctor",
          "status": "Past Due",
          "type": "fa fa-phone",
          "shared" : false,
          "lastUpdated" : new Date(),
          "publishedAt" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "even": false,
          "assignedToName": "Jenny Keel",
          "isPastDate": false,
          "started": false,
          "draft": false,
          "deleted": false,
          "name": "Complete Form O2",
          "status": null,
          "type": null,
          "shared" : false,
          "lastUpdated" : new Date(),
          "publishedAt" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "even": false,
          "assignedToName": "Susan Ross",
          "isPastDate": false,
          "started": false,
          "draft": false,
          "deleted": false,
          "name": "Enter Time",
          "status": "In Progress",
          "type": null,
          "shared" : false,
          "lastUpdated" : new Date(),
          "publishedAt" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
        }];
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/general-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-list-task` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-list-task`.
> Note: Don't forget to add `--project lick-app-widget-list-task` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-list-task` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-list-task`, go to the dist folder `cd dist/lick-app-widget-list-task` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-list-task` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
