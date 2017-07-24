var gulp    = require("gulp");
var sass    = require('gulp-sass');
var concat  = require("gulp-concat");
var cssmin  = require("gulp-cssmin");
var htmlmin = require("gulp-htmlmin");

gulp.task('sass', function () {
  	return gulp.src('./source/scss/*.scss')
    	.pipe(sass({style: 'compressed'}).on('error', sass.logError))
    	.pipe(concat('style.min.css'))
    	.pipe(cssmin())
    	.pipe(gulp.dest('./dist/css'));
});

gulp.task("html", function() {
	return gulp.src("./source/index.html")
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest("./dist"));
});

/*
gulp.task('move-css', function() {
	return gulp.src('source/scss/*.scss')
			.pipe(gulp.dest('dist/css'));
});
*/

gulp.task('background', function() {
	gulp.watch([
		'source/scss/*.scss',
		'source/index.html'
	], ['sass', 'html'])
});
