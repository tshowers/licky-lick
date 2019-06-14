# LickAppWidgetStats17

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        event: Event = {
          "contacts": [],
          "attendees": [{
            "name": "Peter Drucker",
            "url": "https://via.placeholder.com/64x64.png"
          }, {
            "name": "Mary Wilson",
            "url": "https://via.placeholder.com/64x64.png"
          }, {
            "name": "Adrian Barns",
            "url": "https://via.placeholder.com/64x64.png"
          }, {
            "name": "Leslie Thompson",
            "url": "https://via.placeholder.com/64x64.png"
          }, {
            "name": "Jen Dyer",
            "url": "https://via.placeholder.com/64x64.png"
          }],
          "requiredStaffing": Math.floor(Math.random() * 10), // Generates random number for demo only
          "confirmed": false,
          "availableSpaces": Math.floor(Math.random() * 100),
          "costPerPerson": Math.floor(Math.random() * 100),
          "draft": true,
          "deleted": false,
          "startDate": new Date(),
          "endDate": new Date(),
          "startTime": "10:00am",
          "title": "Board Meeting",
          "description": "Discuss upcoming fundraiser",
          "location": "3892 Love Drive",
          "name": "Board Meeting",
          "shared": true,
          "publishedAt": new Date(),
          "lastUpdated": new Date(),
          "timeStamp": new Date(),
          "user_id": Math.floor(Math.random() * 1000).toString(),
          "userName": "System"
};
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats17` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats17`.
> Note: Don't forget to add `--project lick-app-widget-stats17` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats17` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats17`, go to the dist folder `cd dist/lick-app-widget-stats17` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats17` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
