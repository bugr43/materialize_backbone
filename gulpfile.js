var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('connect', function () {
    connect.server({
        port: 8080,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('client/css/*.css')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('client/js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);
    gulp.watch('client/css/*.css', ['css']);
    gulp.watch('client/js/*.js', ['js'])
});

gulp.task('default', ['html', 'css', 'js', 'connect', 'watch']);