class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const ferrari = new Carro('Ferrari 488 Spider', 'Azul', 1);
console.log(ferrari.calcularGastoDeViagem(70, 5));
const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcularGastoDeViagem(70, 5));
