import Lista from "../Lista";

const josephus = (lista, contagem) =>{
    let count = 0;
    let indice= 0;

    let indices = new Lista();

    for(let i=0; i < lista.length();i++){
        indices.append(i);
    }

    while(indices.length() > 1){
        
        count++; 
        if(count === contagem){
            indices.removeAt(indice);
            count = 0;
            indice--;
        }        
        indice++;
        if(indice >= indices.length()){
            indice = 0;
        }
    }

    return indices.get(0);
}

export default josephus;