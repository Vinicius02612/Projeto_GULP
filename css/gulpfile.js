//PROCESSANDO SASS COM GULP

const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')



function transformaCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyOCommenst": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformaCSS, copiarHTML)