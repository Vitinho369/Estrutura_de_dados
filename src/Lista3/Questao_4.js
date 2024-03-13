const inverterLista = (lista) =>{
    let aux;
    let tam = lista.length();

    for(let i=0; i < tam/2;i++){
        aux = lista.get(i);
        lista.addAt(lista.get(tam - i - 1), i);
        lista.removeAt(i+1);
        lista.addAt(aux,tam - i - 1);
        lista.removeAt(tam-i);
    }

    return lista.asArray();
};

export default inverterLista;