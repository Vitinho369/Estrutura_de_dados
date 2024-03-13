import ListaString from "../../src/Lista3/Questao_6";

let l;

beforeEach(
    () =>{
        l = new ListaString();
    }
);

test("Teste 1",
    () =>{
        l.append("A");
        l.append("B");
        l.append("C");
        l.append("D");
        l.append("E");

        expect(l.substring(0,1).asArray()).toStrictEqual(["A","B"]);
    }
);

test("Teste 2",
    () =>{
        l.append("A");
        l.append("B");
        l.append("C");
        l.append("D");
        l.append("E");

        expect(l.substring(2,4).asArray()).toStrictEqual(["C","D","E"]);
    }
);

test("Teste 3",
    () =>{
        l.append("A");
        l.append("B");
        l.append("C");
        l.append("D");
        l.append("E");

        expect(l.substring(3,4).asArray()).toStrictEqual(["D","E"]);
    }
);