// -------------------------------------------------------------------------------------------------------------------- !!
// Gulp Libraries
// -------------------------------------------------------------------------------------------------------------------- !!

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

// -------------------------------------------------------------------------------------------------------------------- !!
// Utils
// -------------------------------------------------------------------------------------------------------------------- !!

var cc = {
    cyan: '\033[0;36m',
    yellow: '\033[0;33m',
    pink:'\033[0;35m',
    clear: '\033[0m'
};
function reportChange(event){
    console.log('File ' + cc.pink + event.path + cc.clear + ' was ' + cc.cyan + event.type + cc.clear + ' running tasks...');
}

// -------------------------------------------------------------------------------------------------------------------- !!
// Gulp Tasks
// -------------------------------------------------------------------------------------------------------------------- !!

// tidy task
gulp.task('clean:build', function() {
  return del.sync('build');
})

// sass task
gulp.task('sass', function() {
  	return gulp.src('src/sass/**/*.scss') 
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
});

// font task
gulp.task('font', function() {
  	return gulp.src('src/fonts/**/*')
  	.pipe(gulp.dest('build/fonts/'))
  	.pipe(browserSync.stream())
})

// image task
gulp.task('img', function() {
  	return gulp.src('src/img/**/*')
  	.pipe(gulp.dest('build/img/'))
  	.pipe(browserSync.stream())
})

// javascript task
gulp.task('js', function() {
  	return gulp.src('src/js/**/*.js')
  	.pipe(gulp.dest('build/js/'))
  	.pipe(browserSync.stream())
})

// php (wrapper) task
gulp.task('page', function() {
  	return gulp.src('src/*.php')
  	.pipe(gulp.dest('build'))
  	.pipe(browserSync.stream())
})

// php (partial) task
gulp.task('partial', function() {
  	return gulp.src('src/partials/*.php')
  	.pipe(gulp.dest('build/partials/'))
  	.pipe(browserSync.stream())
})

// php (section) task
gulp.task('section', function() {
    return gulp.src('src/sections/*.php')
    .pipe(gulp.dest('build/sections/'))
    .pipe(browserSync.stream())
})

// browser sync task
gulp.task('browserSync', function() {
  	browserSync.init({
        proxy: "localhost:8888"
    });
})
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
})

// watch task
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']).on('change', reportChange);;
    gulp.watch('src/partials/**/*',  ['partial']).on('change', reportChange);;
    gulp.watch('src/sections/**/*',  ['section']).on('change', reportChange);;
    gulp.watch('src/*.php', 		     ['page']).on('change', reportChange);;
    gulp.watch('src/js/**/*.js', 	   ['js']).on('change', reportChange);;
    gulp.watch('src/img/**/*', 		   ['img']).on('change', reportChange);;
})

// -------------------------------------------------------------------------------------------------------------------- !!
// Build/Develop tasks
// -------------------------------------------------------------------------------------------------------------------- !!

gulp.task('develop', function () {
  	runSequence('clean:build', 
    	[
    		'sass', 
    		'font', 
    		'img', 
    		'js',
    		'partial',
        'section',
    		'page'
    	],
    	'browserSync',
    	'watch'
  	)
})

gulp.task('build', function () {
  	runSequence('clean:build', 
    	[
    		'sass', 
    		'font', 
    		'img', 
    		'js',
    		'partial',
        'section',
    		'page'
    	]
  	)
})


