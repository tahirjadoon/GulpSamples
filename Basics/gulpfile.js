const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
Top level functions
    gulp.task - Define tasks
    gulp.src - Source files
    gulp.dest - Destination folder to output
    gulp.watch - watch files and folders for changes
*/

// Default could be run siply as >gulp ... using auto run for all the tasks
/* gulp.task('default', function(){
    return console.log('Default running...');
}) */
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']); //'minify'

// Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
})

// Copy html files to dist folder
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

//optimize images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minify js
gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

// Compile SASS
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})

//Scripts files
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

//Constantly watch rathert than running gulp manually
gulp.task('watch', function(){
    //Location and Scrit to run
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
})