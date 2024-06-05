
const entradas = [10, 22, 15, 9, 100, 50, 60, 13, 69, 2 ];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };