# LickAppWidgetStats9

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        @Input() chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        @Input() dataSetLabel = "Per Month";
        @Input() borderColor = "#10b1dd";
        @Input() fill: boolean = true;
        @Input() chartData1: number[] = [
          1,
          5,
          6,
          8,
          19,
          8,
          9,
          15,
          9,
          2,
          18,
          17
        ];
        @Input() chartData2: number[] = [
          1,
          5,
          6,
          8,
          19,
          8,
          9,
          15,
          9,
          2,
          18,
          17
        ];
        @Input() chartData3: number[] = [
          1,
          5,
          6,
          8,
          19,
          8,
          9,
          15,
          9,
          2,
          18,
          17
        ];
        @Input() responsive: boolean = true;
        @Input() borderWidth: number = 1;
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats9` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats9`.
> Note: Don't forget to add `--project lick-app-widget-stats9` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats9` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats9`, go to the dist folder `cd dist/lick-app-widget-stats9` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats9` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
