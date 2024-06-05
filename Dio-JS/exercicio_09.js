//Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota. Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notasDosAlunos = [2, 7, 3, 8, 10, 4];
let maiorNotaEncontrada = 0;

for (let i = 0; i < notasDosAlunos.length; i++) {
    if (notasDosAlunos[i] > maiorNotaEncontrada) {
        maiorNotaEncontrada = notasDosAlunos[i];
    }
}

console.log(maiorNotaEncontrada);
