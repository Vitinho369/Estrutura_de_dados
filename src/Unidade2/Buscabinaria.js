function buscaBinaria(chave, tabela){
    let esquerda = 0;
    let direita = tabela.length;
    let inicio, fim;
    let meio = Math.floor((esquerda + direita)/2);

    if(tabela[meio] < chave){
        inicio = meio;
        fim = direita;
    }else if(tabela[meio] > chave){
        inicio = esquerda;
        fim = meio;
    }else{
        return tabela[meio];
    }

    return buscaBinaria(chave, tabela.slice(inicio, fim));
}

export default buscaBinaria;