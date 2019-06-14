# LickAppWidgetStats15

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        @Input() headingText = "licky-lick-app-widget-stats15";
        @Input() total: number = Math.floor(Math.random() * 1000); // Used to generate random number for demonstration purposes only
        @Input() newItemLink: string = "/";
        @Input() newItemText = "New Item";

        @Input() iconClass1 = "fa fa-check-square-o";
        @Input() count1 = Math.floor(Math.random() * 1000);
        @Input() countText1 = "Published";

        @Input() iconClass2 = "fa fa-circle-o-notch";
        @Input() count2 = Math.floor(Math.random() * 1000);
        @Input() countText2 = "Completed";

        @Input() iconClass3 = "fa fa-pie-chart";
        @Input() count3 = Math.floor(Math.random() * 1000);
        @Input() countText3 = "Successfull";

        @Input() iconClass4 = "fa fa-sitemap";
        @Input() count4 = Math.floor(Math.random() * 1000);
        @Input() countText4 = "Ongoing";
        @Input() router: Router;
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats15` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats15`.
> Note: Don't forget to add `--project lick-app-widget-stats15` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats15` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats15`, go to the dist folder `cd dist/lick-app-widget-stats15` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats15` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
