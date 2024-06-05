
const { gets, print } = require('./importacao_10');

const quantidadeDeAlunos = gets();
let maiorValorEcontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEcontrado) {
        maiorValorEcontrado = numeroSorteado;
    }
}

print(maiorValorEcontrado);