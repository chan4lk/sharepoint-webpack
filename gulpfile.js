var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpack2 = require('webpack');
var path = require('path');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

gulp.task('workflowapp', function () {
    var base = path.resolve(__dirname, './WebpackTest4/Layouts/WebpackTest4');
    var entry = base + '/app.module.ts';
    var dest = path.resolve(__dirname, base + '/dist');

    var config = {
        context: base,
        entry: {
            workflowapp: './app.module.ts'            
        },
        output: {
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            "jquery": "jQuery",
            "angular": "angular",
        },
        plugins: [
            new CheckerPlugin()
        ]
    };

    return gulp.src(entry)
        .pipe(webpackStream({ config: config}, webpack2))
        .pipe(gulp.dest(dest));
});

gulp.task('default', ['workflowapp']);
