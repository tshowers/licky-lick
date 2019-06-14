# LickAppWidgetStats16

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        @Input() headingText = "licky-lick-app-widget-stats16";
        @Input() subHeadingText = "sub heading";
        @Input() amount = Math.floor(Math.random() * 100000);
        @Input() isCurrency: boolean = true;
        @Input() percentage: number = Math.floor(Math.random() * 100);
        @Input() chartData = [
          Math.floor(Math.random() * 100), // Generates random numbers for demonstration purposes only
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ];
        @Input() chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats16` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats16`.
> Note: Don't forget to add `--project lick-app-widget-stats16` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats16` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats16`, go to the dist folder `cd dist/lick-app-widget-stats16` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats16` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
