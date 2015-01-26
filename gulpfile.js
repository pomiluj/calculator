var gulp     = require('gulp');
var concat   = require('gulp-concat');
var download = require('gulp-download');
var amdOptimize = require('amd-optimize');

var options = {
	paths : {
	  'jquery' : 'js/lib/jquery.min',
	  'flight' : 'js/lib/flight.min',
	  'input'  : 'js/components/input',
	  'output'  : 'js/components/output',
	  'withMaths':'js/mixins/withMaths'
	}
};

//Convenience command
//throws libs from bower_components folder and overwrites old stuff
gulp.task('libs', function(){
	//corner case! its easier to just download the pre-baked flight file than biuld it yourself :P
	download('http://flightjs.github.io/release/latest/flight.min.js').pipe(gulp.dest('js/lib/'));
	gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('js/lib/'));
	gulp.src('bower_components/jquery/dist/jquery.min.map').pipe(gulp.dest('js/lib/'));
	gulp.src('bower_components/requirejs/require.js').pipe(gulp.dest('js/lib/'));
});

//executes a build function
//TODO: auto-change index.html to point directly to index.js and main.css, also minify and stuff
gulp.task('build', function(){

  gulp.src('js/**/*.js').pipe(amdOptimize('main', options)).pipe(concat('index.js')).pipe(gulp.dest('build/'));
  gulp.src('index.html').pipe(gulp.dest('build/'));
  gulp.src('css/main.css').pipe(gulp.dest('build/'));

});