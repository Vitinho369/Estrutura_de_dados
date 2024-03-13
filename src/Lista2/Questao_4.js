import Fila from "../Fila";

const intercalarFilas = (filaA, filaB) =>{
    let tam = filaA.length()* filaB.length();

    let filaC = new Fila(tam);

    for(let i=0; i < tam;i++){
        if(!filaA.isEmpty()){
            filaC.enqueue(filaA.front());
            filaA.dequeue();
        }

        if(!filaB.isEmpty()){
            filaC.enqueue(filaB.front());
            filaB.dequeue();
        }
    }

    return filaC.toString();
}

export default intercalarFilas;