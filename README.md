# gulp-frontend-kit
A development environment for front-end projects using [Gulp](gulpjs.com), [postcss](http://postcss.org/) and [BrowserSync](https://www.browsersync.io/).

Additional functionalities include [precss](https://jonathantneal.github.io/precss/), [cssnano](http://cssnano.co/) and source maps.

## postcss configuration
Postcss is configured to take advantage of imports, nesting and some other functionalities you might expect from a preprocessor like Sass. This is done through [precss](https://jonathantneal.github.io/precss/), which covers most of the basic advantages of preprocessors over traditional CSS authoring. Feel free to configure your own workflow with additional plugins. Just make sure you brush up on the syntax, since not everything works the exact same way.

## Getting Started
`npm install` will make sure you have all dependencies installed.
Be patient, as installing all dependencies might take a while.

Once you're all set, you should run `gulp watch` since it will:
* compile all css in `src/` and copy it over to `build/`;
* start BrowserSync and open the `index.html` file in the root directory;
* watch for changes in .css and .html files to trigger a BrowserSync refresh.

You'll be able to see your HTML and CSS edits in real time from the browser, even on multiple, synchronized devices.
