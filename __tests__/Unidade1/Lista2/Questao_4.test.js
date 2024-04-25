import Fila from "../../../src/Unidade1/Fila";
import intercalarFilas from "../../../src/Unidade1/Lista2/Questao_4";

let filaA;
let filaB;

test("Teste com filas de tamanhos iguais",
    () =>{
        filaA = new Fila(4);
        filaB = new Fila(4);

        filaA.enqueue("A");
        filaA.enqueue("B");
        filaA.enqueue("C");
        filaA.enqueue("D");
        
        filaB.enqueue(1);
        filaB.enqueue(2);
        filaB.enqueue(3);
        filaB.enqueue(4);

        expect(intercalarFilas(filaA, filaB)).toBe("A 1 B 2 C 3 D 4 ");

    }
);


test("Teste com filas de tamanhos diferentes",
    () =>{
        filaA = new Fila(4);
        filaB = new Fila(7);

        filaA.enqueue("A");
        filaA.enqueue("B");
        filaA.enqueue("C");
        filaA.enqueue("D");
        
        filaB.enqueue(1);
        filaB.enqueue(2);
        filaB.enqueue(3);
        filaB.enqueue(4);
        filaB.enqueue(5);
        filaB.enqueue(6);
        filaB.enqueue(7);

        expect(intercalarFilas(filaA, filaB)).toBe("A 1 B 2 C 3 D 4 5 6 7 ");

    }
);

test("Teste com filas de tamanhos diferentes versao 2",
    () =>{
        filaA = new Fila(10);
        filaB = new Fila(3);

        filaA.enqueue("A");
        filaA.enqueue("B");
        filaA.enqueue("C");
        filaA.enqueue("D");
        filaA.enqueue("E");
        filaA.enqueue("F");
        filaA.enqueue("G");
        filaA.enqueue("H");
        filaA.enqueue("I");
        filaA.enqueue("J");
        
        filaB.enqueue(1);
        filaB.enqueue(2);
        filaB.enqueue(3);

        expect(intercalarFilas(filaA, filaB)).toBe("A 1 B 2 C 3 D E F G H I J ");

    }
);