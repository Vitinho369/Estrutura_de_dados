function buscaSeqSentinela(chave, array){
    let arraySentinela = array;
    let i;
    arraySentinela[arraySentinela.length] = chave;

    for(i=0; arraySentinela[i] !== chave; i++);

    if(chave === arraySentinela[i] && i !== array.length-1)
        return arraySentinela[i];

    return null;
}

export default buscaSeqSentinela;