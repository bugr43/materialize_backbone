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
    gulp.src('css/*.css')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);
    gulp.watch('css/*.html', ['css'])
});

gulp.task('default', ['html', 'css', 'connect', 'watch']);