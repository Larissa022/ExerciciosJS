function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Larissa, ') +'Maior de idade');
    }else{
        console.log(escrevaMeuNome('Larissa, ') +'Menor de idade');
    }
}

verificarIdade(18);