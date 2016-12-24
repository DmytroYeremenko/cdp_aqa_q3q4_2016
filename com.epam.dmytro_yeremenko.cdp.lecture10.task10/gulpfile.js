const gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    protractor = require("gulp-protractor").protractor;

gulp.task('test', function () {
    gulp.src('./src/test/test.spec.js').pipe(protractor({configFile: "./protractor.conf.js"}))
});