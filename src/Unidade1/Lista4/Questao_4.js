import Conjunto from "../Conjunto";

mega_sena = (matrizMega, numApostador) =>{

    let conjuntoNum = new Conjunto();

    for(let i of numApostador){
        conjuntoNum.add(i);
    }

    for(let i of matrizMega){
        let conjuntoCompara = new Conjunto();

        for(let j of i){
            conjuntoCompara.add(j)
        }
        
        if(conjuntoNum.difference(conjuntoCompara).values().length == 0)
            return 6;
        else if(conjuntoNum.difference(conjuntoCompara).values().length  == 1)
            return 5;
    }

    return 0;
}

export default mega_sena;