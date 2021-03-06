const gulp = require("gulp");
const fileAssets = require("gulp-file-assets");
const inlineCss = require("gulp-inline-css");
const postcss = require("gulp-postcss");
const logger = require("gulp-logger");
const filter = require("gulp-filter");
const rcs = require("gulp-rcs");
const merge2 = require("merge2");
const inlinesource = require("gulp-inline-source");
const inlineStyle = require("gulp-inline-style");
const clean = require("gulp-clean");
const htmlmin = require("gulp-htmlmin");
const cssnano = require("cssnano");
const inline = require("gulp-inline");
const embedSvg = require("gulp-embed-svg");
const svgInline = require("gulp-svg-inline");
const inlineimg = require('./base64-img');

gulp.task("clean", function() {
  return gulp.src(["./tmp/*", "./dist/*"], { read: false }).pipe(clean());
});

gulp.task("copy", function() {
  return gulp.src("./src/**").pipe(gulp.dest("./tmp"));
});

gulp.task("minify-classes", function() {
  return gulp
    .src(["./tmp/index.css", "./tmp/index.html"])
    .pipe(rcs())
    .pipe(gulp.dest("./tmp"));
});

gulp.task("inline-styles", function() {
  return gulp
    .src("./tmp/index.html")
    .pipe(inlineStyle("./tmp/"))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task("inline-styles", function() {
  return gulp
    .src("./tmp/index.html")
    .pipe(inlineStyle("./tmp/"))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task("uglify-html", function() {
  return gulp
    .src("./tmp/index.html")
    .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true }))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task("inline-svg", function() {
  const css = gulp
    .src("./tmp/index.css")
    .pipe(svgInline({ extensions: [/.svg/gi] }));
  const html = gulp.src("./tmp/index.html").pipe(embedSvg({ root: "./tmp/" }));

  return merge2(css, html).pipe(gulp.dest("./tmp/"));
});

gulp.task("inline-js", function() {
  return gulp
    .src("./tmp/index.html")
    .pipe(inlinesource({}))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task("inline-img", function() {
  return gulp
    .src("./tmp/index.html")
    .pipe(inlineimg('./tmp/'))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task("css", gulp.series("minify-classes"));
gulp.task(
  "html",
  gulp.series(
    "inline-js",
    "inline-img",
    "inline-svg",
    "inline-styles",
    "uglify-html"
  )
);

gulp.task("dist", function() {
  return gulp
    .src([
      "./tmp/index.html",
      "./tmp/video.webm",
      "./tmp/01.jpg",
      "./tmp/02.jpg",
      "./tmp/03.jpg",
      "./tmp/favicon.ico"
    ])
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", gulp.series("clean", "copy", "css", "html", "dist"));
