
//Programa para calcular a média de 3 notas e dizer se o aluno está passado, de recuperação ou reprovado.

const primeiraNota = 10;
const segundaNota = 6;
const terceiraNota = 10;

const media = (primeiraNota + segundaNota + terceiraNota) /3;
console.log(media.toFixed(2));

if (media > 7){
    console.log("O aluno passou de semestre");
}else if (media <=7 && media >=5 ){
    console.log("O aluno está de recuperação");
} else{
    console.log("O aluno está reprovado");
}