# gulp-frontend-kit
A development environment for front-end projects using Gulp, postcss and BrowserSync.
Additional functionalities include precss, autoprefixer, sourcemaps and cssnano.

## postcss configuration
Postcss is configured to take advantage of imports and nesting out of the box, as I consider them the basic advantages of preprocessors over traditional CSS authoring.
Feel free to configure it with additional plugins.

## Getting Started
`npm install` will make sure you have all dependencies installed.
Be patient, as installing all dependencies might take a while.

Once you're all set, you should run `gulp watch` since it will:
* compile all css in `src/` and copy it over to `build/`;
* start BrowserSync and open the `index.html` file in the root directory;
* watch for changes in .css and .html files to trigger a BrowserSync refresh.
