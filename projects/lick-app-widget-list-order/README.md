# LickAppWidgetListOrder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        orders : Order[] = [{
          "shippingRequired": false,
          "date": null,
          "amount": Math.floor(Math.random() * 1000),
          "tax": Math.floor(Math.random() * 1000),
          "orderLine": [],
          "invoices": [],
          "draft": true,
          "deleted": false,
          "id": Math.floor(Math.random() * 1000).toString(),
          "orderDate": new Date(),
          "status": "Processing",
          "shared" : false,
          "lastUpdated" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
          "name" : null
        }, {
          "shippingRequired": false,
          "date": null,
          "amount": Math.floor(Math.random() * 1000),
          "tax": Math.floor(Math.random() * 1000),
          "orderLine": [],
          "invoices": [],
          "draft": true,
          "deleted": false,
          "id": Math.floor(Math.random() * 1000).toString(),
          "orderDate":new Date(),
          "status": "Shipped",
          "shared" : false,
          "lastUpdated" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
          "name" : null
        }, {
          "shippingRequired": false,
          "date": null,
          "amount": Math.floor(Math.random() * 1000),
          "tax": Math.floor(Math.random() * 1000),
          "orderLine": [],
          "invoices": [],
          "draft": true,
          "deleted": false,
          "id": Math.floor(Math.random() * 1000).toString(),
          "orderDate": new Date(),
          "status": "Delivered",
          "shared" : false,
          "lastUpdated" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
          "name" : null
        }, {
          "shippingRequired": false,
          "date": null,
          "amount": Math.floor(Math.random() * 1000),
          "tax": Math.floor(Math.random() * 1000),
          "orderLine": [],
          "invoices": [],
          "draft": true,
          "deleted": false,
          "id": Math.floor(Math.random() * 1000).toString(),
          "orderDate": new Date(),
          "status": "Pending",
          "shared" : false,
          "lastUpdated" : new Date(),
          "timeStamp" : new Date(),
          "user_id" : Math.floor(Math.random() * 1000).toString(),
          "userName" : "System",
          "name" : null
        }];
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/general-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-list-order` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-list-order`.
> Note: Don't forget to add `--project lick-app-widget-list-order` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-list-order` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-list-order`, go to the dist folder `cd dist/lick-app-widget-list-order` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-list-order` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
