import inverterFila from "../../src/Lista2/Questao_6";
import Fila from "../../src/Fila";

let f, fInverte, fParametro;

beforeEach(
    () =>{
        f = new Fila();
        fInverte = new Fila();
        fParametro = new Fila();
    }
);

test("Teste 1",
    () =>{
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);

        fInverte.enqueue(5);
        fInverte.enqueue(4);
        fInverte.enqueue(3);
        fInverte.enqueue(2);
        fInverte.enqueue(1);
        inverterFila(f,fParametro);

        expect(fParametro).toStrictEqual(fInverte);
    }
);

test("Teste 2",
    () =>{
        f = new Fila(10);
        fInverte = new Fila(10);
        fParametro = new Fila(10);
        f.enqueue(10);
        f.enqueue(9);
        f.enqueue(8);
        f.enqueue(7);
        f.enqueue(6);
        f.enqueue(5);
        f.enqueue(4);
        f.enqueue(3);
        f.enqueue(2);
        f.enqueue(1);

        fInverte.enqueue(1);
        fInverte.enqueue(2);
        fInverte.enqueue(3);
        fInverte.enqueue(4);
        fInverte.enqueue(5);
        fInverte.enqueue(6);
        fInverte.enqueue(7);
        fInverte.enqueue(8);
        fInverte.enqueue(9);
        fInverte.enqueue(10);
        inverterFila(f,fParametro)
        expect(fParametro).toStrictEqual(fInverte);
    }
);