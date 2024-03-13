import embaralharLista from "../../src/Lista3/Questao_5";
import Lista from "../../src/Lista";

let l;

beforeEach(
    () =>{
        l = new Lista();
    }
);

test("Teste 1",
    () =>{
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        l.append(6);

        expect(embaralharLista(l).asArray()).toStrictEqual([2,1,4,3,6,5]);
    }
);


test("Teste 2",
    () =>{
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        l.append(6);
        l.append(7);
        l.append(8);
        l.append(9);
        l.append(10);
        l.append(11);

        expect(embaralharLista(l).asArray()).toStrictEqual([2,1,4,3,6,5,8,7,10,9,11]);
    }
);