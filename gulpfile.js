// var gulp = require("gulp");
// var autoprefixer = require("gulp-autoprefixer");

// gulp.task("styles", async function() {
//   gulp
//     .src("styles.css")
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("build"));
// });

// const gulp = require("gulp");

// gulp.task("taskname", function() {
//   console.log("\nHello world!\n");
// });

// gulp.task('autoprefixer', () => {
//   const autoprefixer = require('autoprefixer')
//   const sourcemaps = require('gulp-sourcemaps')
//   const postcss = require('gulp-postcss')

//   return gulp.src('*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer() ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./dest'))
// })

const autoprefixer = require("gulp-autoprefixer");
const gulp = require("gulp");

gulp.task("styles", () =>
  gulp
    .src("styles.css")
    .pipe(
      autoprefixer({
        cascade: true
      })
    )
    .pipe(gulp.dest("style"))
);
