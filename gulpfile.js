var gulp = require('gulp');

var imagemin = require('gulp-imagemin');

var devPath = 'dev/';
var prodPath = 'app/';

gulp.task('build-html', function () {
    return gulp.src([devPath + '**/*.html'])
        .pipe(gulp.dest(prodPath));
});

gulp.task('build-css', function () {
    return gulp.src([devPath + '**/*.css'])
        .pipe(gulp.dest(prodPath));
});

gulp.task('build-img', function () {
  return gulp.src(devPath + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(prodPath + 'img/'));
});

gulp.task('build', ['build-html','build-css','build-img']);

gulp.task('watch', function () {
    gulp.watch(devPath + '**/*.html', ['build-html']);
    gulp.watch(devPath + '**/*.css', ['build-css']);
    gulp.watch(devPath + 'img/*', ['build-img']);
    gulp.watch(prodPath + '**/*.js', []);
});
gulp.task('default', ['watch','build']);
