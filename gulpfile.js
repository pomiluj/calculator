var gulp     = require('gulp');
var concat   = require('gulp-concat');
var download = require('gulp-download');

//Convenience command
//throws libs from bower_components folder and overwrites old stuff
gulp.task('libs', function(){
	//corner case! its easier to just download the pre-baked flight file than biuld it yourself :P
	download('http://flightjs.github.io/release/latest/flight.min.js').pipe(gulp.dest("js/lib/"));
	gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('js/lib/'));
	gulp.src('bower_components/jquery/dist/jquery.min.map').pipe(gulp.dest('js/lib/'));
	gulp.src('bower_components/requirejs/require.js').pipe(gulp.dest('js/lib/'));
});
