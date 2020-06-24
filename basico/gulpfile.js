const gulp = require('gulp')
const series = gulp.series
    //exxcutando funções em series , uma atras de outra 
const antes1 = cb => {
    console.log("Primeria função executada")
    return cb()
}
const antes2 = cb => {
    console.log("Segunda  função executada")
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    //pegando um cnojuto de arquivos que tenham a extensão .txt
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('OutraPasta'))
    return cb()
}


const fim = cb => {
    console.log("Ultima função executada")
    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,

)