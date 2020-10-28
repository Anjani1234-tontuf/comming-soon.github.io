/*
    A quick explanation of all the tasks in this file.

    Command                     What does it do?
    gulp compile-scripts        compiles all script files into one file
    gulp compile-styles         compiles all stylesheets into one file
    gulp compile-all            runs the two task above
    gulp watch-scripts          will watch script files for change, and then
                                run the compile function
    gulp watch-styles           does the same for stylesheets
    gulp watch-all              will run the two tasks above
    gulp                        this runs both compile-all and watch-all
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

// This is the collection of all the files that should be compiled
var src = {
    // javascript files
    javascript: [
        'src/js/*.js', // Self-created scripts
        'bower_components/p5.js/lib/p5.min.js', // p5.js
        'bower_components/p5.js/lib/addons/p5.*.min.js' // p5.js addons
    ],

    // stylesheets
    css: 'src/css/*.css'
}



// This task will compile all javascript files into one
gulp.task('compile-scripts', function(){
    return gulp.src(src.javascript)
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

// This task will watch javascript files for changes, and compile on change
gulp.task('watch-scripts', function(){
    gulp.watch(src.js, ['compile-scripts']);
});



// This task will compile all stylesheets into one file
gulp.task('compile-styles', function(){
    return gulp.src(src.css)
        .pipe(concat('build.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('build'));
});

// Watch stylesheets, and launch compile task on change
gulp.task('watch-styles', function(){
    gulp.watch(src.css, ['compile-styles']);
})



// This task will run all compile functions
gulp.task('compile-all', ['compile-styles', 'compile-scripts']);

// This will run all watch functions
gulp.task('watch-all', ['watch-styles', 'watch-scripts']);



// The default task will run watch-all and compile-all
gulp.task('default', ['compile-all', 'watch-all']);
