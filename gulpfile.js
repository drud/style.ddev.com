var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'docs/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /docs/js folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./docs"
    });

    gulp.watch(['src/js/style.js', 'node_modules/bootstrap/scss/_variables.scss', 'node_modules/bootstrap/scss/bootstrap.scss', 'docs/scss/*.scss'], ['sass']);
    gulp.watch(['docs/*.html', 'docs/components/*.html', 'docs/components/typography/*.html', 'docs/components/colors/*.html', 'docs/components/alerts/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);