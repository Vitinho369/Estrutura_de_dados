function buscaSequencial(chave, array){
    for(let i=0; i < array.length;i++){
        if(chave === array[i]){
            return array[i];
        }
    }

    return null;
}

export default buscaSequencial;