
//Programa que calcula o preço de um produto de acordo com a forma de pagamento.

const precoEtiqueta = 100;
const formaDePagamento = 3;

if( formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if(formaDePagamento === 2){
    console.log(precoEtiqueta -(precoEtiqueta * 0.15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}