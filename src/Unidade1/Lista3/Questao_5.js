const embaralharLista = (lista) =>{
    let percorrer = lista.cabeca.proximo;
    let pos1, pos2, aux = lista.cabeca;

    while(percorrer !== null){
        pos1 = percorrer;
        pos2 = percorrer.proximo;

        if(pos2 !== null){
            pos1.proximo = pos2.proximo;
            pos2.proximo = pos1;
            aux.proximo = pos2;
        }
        
        percorrer = percorrer.proximo;
        aux = pos1;
    }

    return lista;
};

export default embaralharLista;