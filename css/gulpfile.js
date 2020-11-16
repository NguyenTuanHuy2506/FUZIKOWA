var gulp = require('gulp');
// gulp-sass plugin
var sass = require('gulp-sass');
gulp.task('sass', function () {
  return gulp.src('*.scss') // cấu hình gulp địa chỉ của tập tin nguồn sass
    .pipe(sass()) // chuyển tập tin nguồn sass thành tập tin css
    .pipe(gulp.dest('./')) // địa chỉ tập tin css sẽ được lưu lại
});

gulp.task('watch', function () {
  gulp.watch('*.scss', gulp.series('sass'));
  // Other watcherss
})