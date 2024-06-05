
const precoEtanol = 3.64;
const precoGasolina = 5.63;
const kmPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmPorLitros;

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}