var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('css', function () {
    var opts = {comments:true,spare:true};
    return gulp.src(gulp.dest('./dist'))
        .pipe(minify(opts))
        .pipe(rename('inputmask.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css']);
