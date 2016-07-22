# gulp-frontend-kit
A development environment for front-end projects using [Gulp](gulpjs.com), [postcss](http://postcss.org/) and [BrowserSync](https://www.browsersync.io/).

Additional functionalities include [precss](https://jonathantneal.github.io/precss/), [autoprefixer](https://autoprefixer.github.io/), [cssnano](http://cssnano.co/) and source maps.

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

You'll be able to see your HTML and CSS edits in real time, even on multiple devices at the same time.
