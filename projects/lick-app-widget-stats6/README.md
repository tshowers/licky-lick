# LickAppWidgetStats6

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        @Input() headingText = "Test Header";
        @Input() count : Number = Math.floor(Math.random() * 1000);
        @Input() label = "Total Files";
        @Input() iconClass = "fa fa-paperclip";
        @Input() showMoreLink = "/";
        @Input() router: Router;

```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats6` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats6`.
> Note: Don't forget to add `--project lick-app-widget-stats6` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats6` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats6`, go to the dist folder `cd dist/lick-app-widget-stats6` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats6` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
