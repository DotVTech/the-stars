const gulp            = require('gulp'),
      autoprefixer    = require('gulp-autoprefixer'),
      sass            = require('gulp-sass'),
      babel           = require('gulp-babel'),
      uglify          = require('gulp-uglify'),
      imagemin        = require('gulp-imagemin');


const paths = {
    mainSass: 'src/css/sass/main.sass',
    sass: 'src/css/sass/**/*.{sass,scss}',
    js: 'src/js/**/*.js',
    images: 'images/**/*.{png,jpg,svg}',
};


const dists = {
    css: 'dist/css',
    js: 'dist/js',
    images: 'dist/images'
};


gulp.task('watch', function() {
    gulp.watch(paths.sass, gulp.series('sass'));
    gulp.watch(paths.js, gulp.series('js'));
    gulp.watch(paths.images, gulp.series('images'));
});


gulp.task('sass', () => {
    return gulp.src(paths.mainSass)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dists.css));
});


gulp.task('js', () => {
    return gulp.src(paths.js)
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest(dists.js));
});


gulp.task('images', () => {
    return gulp.src(paths.images)
        .pipe(imagemin([
            imagemin.optipng(),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest(dists.images));
});


gulp.task('default', gulp.series('watch'));
