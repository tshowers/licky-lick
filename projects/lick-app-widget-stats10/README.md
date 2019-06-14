# LickAppWidgetStats10

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Example Input
```ts
        @Input() data1: any[] = [
          {
            "id": Math.floor(Math.random() * 1000).toString(), // Used only to generate a random number for demo purposes
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Catherine Drake",
            "amount": Math.floor(Math.random() * 1000),
            "shortDescription": "Gravida enim ullamcorper urna elit facilisi habitant quisque viverra integer velit. Nostra, natoque ad interdum mauris faucibus auctor sagittis."
          },
          {
            "id": Math.floor(Math.random() * 1000).toString(),
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Kay Tylar",
            "amount": Math.floor(Math.random() * 1000), // Used only to generate a random number for demo purposes
            "shortDescription": "Dignissim vulputate est parturient, adipiscing vehicula! Nunc duis justo class at lorem sem velit nullam phasellus nunc."
          },
          {
            "id": Math.floor(Math.random() * 1000).toString(),
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Asher Suzanne",
            "amount": Math.floor(Math.random() * 1000), // Used only to generate a random number for demo purposes
            "shortDescription": "Primis dolor placerat hendrerit ad ante."
          },
        ];
        @Input() data2: any[] = [
          {
            "id": Math.floor(Math.random() * 1000).toString(),
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Theo Carmella",
            "amount": Math.floor(Math.random() * 1000), // Used only to generate a random number for demo purposes
            "shortDescription": "Elementum per enim nullam hac."
          },
          {
            "id": Math.floor(Math.random() * 1000).toString(),
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Colene Cecil",
            "amount": Math.floor(Math.random() * 1000), // Used only to generate a random number for demo purposes
            "shortDescription": "Nascetur diam libero ullamcorper himenaeos conubia? Netus nisl himenaeos nascetur ligula porttitor lorem mollis pharetra consequat ut praesent praesent!"
          },
          {
            "id": Math.floor(Math.random() * 1000).toString(),
            "url": "https://via.placeholder.com/1024x768.png",
            "userName": "Catherin Bridget",
            "amount": Math.floor(Math.random() * 1000), // Used only to generate a random number for demo purposes
            "shortDescription": "Felis condimentum magna feugiat inceptos enim et lorem sodales metus sit dignissim sollicitudin."
          },

        ];
```

## Example Output

[LickAppWidgetCardDeck](https://lick-test.firebaseapp.com/application/stat-widgets)

## Code scaffolding

Run `ng generate component component-name --project lick-app-widget-stats10` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lick-app-widget-stats10`.
> Note: Don't forget to add `--project lick-app-widget-stats10` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build lick-app-widget-stats10` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lick-app-widget-stats10`, go to the dist folder `cd dist/lick-app-widget-stats10` and run `npm publish`.

## Running unit tests

Run `ng test lick-app-widget-stats10` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
