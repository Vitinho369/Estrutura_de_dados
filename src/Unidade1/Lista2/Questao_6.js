const inverterFila = (fila,filaInvertida) =>{
    let filaN = fila;
    let guardaFront;

    if(filaN.length() > 0){
        guardaFront = filaN.front();
        filaN.dequeue();
        inverterFila(filaN, filaInvertida);
        filaInvertida.enqueue(guardaFront);
    }

    // return filaInvertida;
};

export default inverterFila;