# LickAppWidgetFeed

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        messages: Message[] = [{
          "id": Math.floor(Math.random() * 1000).toString(),
          "text": "Modi ratione aliquid non. Et porro deserunt illum sed velit necessitatibus. ",
          "name": "John Hammond",
          "replies": [],
          "favored": false,
          "bookmarked": false,
          "draft": true,
          "deleted": false,
          "icon": "https://via.placeholder.com/64x64.png",
          "user_id": "1002",
          "timeStamp": new Date(),
          "handle": "@JohnHammond",
          "status": "notification online",
          "shared": false,
          "article": null,
          "lastUpdated": new Date(),
          "userImage": null

        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed",
          "name": "Bill Burr",
          "replies": [],
          "favored": false,
          "bookmarked": false,
          "draft": true,
          "deleted": false,
          "icon": "https://via.placeholder.com/64x64.png",
          "user_id": Math.floor(Math.random() * 1000).toString(),
          "timeStamp": new Date(),
          "handle": "@BillBurr",
          "status": "notification online",
          "shared": false,
          "article": null,
          "lastUpdated": new Date(),
        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "text": "Id vel ducimus perferendis fuga excepturi nulla. Dolores dolores amet et laborum facilis. Officia magni ut non autem et qui incidunt.",
          "name": "Wayne Newton",
          "replies": [],
          "favored": false,
          "bookmarked": false,
          "draft": true,
          "deleted": false,
          "icon": "https://via.placeholder.com/64x64.png",
          "user_id": Math.floor(Math.random() * 1000).toString(),
          "timeStamp": new Date(),
          "handle": "@WayneNewton",
          "status": "notification online",
          "shared": false,
          "article": null,
          "lastUpdated": new Date(),
        }, {
          "id": Math.floor(Math.random() * 1000).toString(),
          "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed.",
          "name": "John Hammond",
          "replies": [],
          "favored": false,
          "bookmarked": false,
          "draft": true,
          "deleted": false,
          "icon": "https://via.placeholder.com/64x64.png",
          "user_id": "1002",
          "timeStamp": new Date(),
          "handle": "@JohnHammond",
          "status": "notification online",
          "shared": false,
          "article": null,
          "lastUpdated": new Date(),
        }];

        currentUser: User = {
          "id": "1002",
          "name": "John Hammon",
          "shared": false,
          "lastUpdated": new Date(),
          "timeStamp": new Date(),
          "user_id": Math.floor(Math.random() * 1000).toString(),
          "userName": "Bill Moyer",
          "publishedAt": new Date()
        };
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/general-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-feed` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-feed`.
> Note: Don't forget to add `--project lick-app-widget-feed` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-feed` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-feed`, go to the dist folder `cd dist/lick-app-widget-feed` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-feed` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
