var gulp = require('gulp');
var sass = require('gulp-sass');

//task which set directory scss and css files. Thanks to it by cmd window and referencje: gulp sass you can once compile scss file to css.

gulp.task('sass', function(){
   return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

// task - cause that scss file is compiled 'in time' to css file after each save

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});