const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJS(cd) {
    //pegando todos os arquivos con extensão .js e contatenado-as em 1 arquivo app.min.js
    gulp.src('src/**/*.js')
        //configurando babel....
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))

    //convertendo o codigio pra ser unificado

    .pipe(uglify())

    //concatenando todo o codigo javaScript pra versão de broswers mais antigos

    .pipe(concat('app.min.js'))

    //jogando na pasta de destino....,

    .pipe(gulp.dest('OutraPastaJS'))

    return (cd)
}

exports.default = series(transformacaoJS)