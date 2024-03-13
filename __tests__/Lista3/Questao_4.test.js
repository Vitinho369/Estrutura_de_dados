import Lista from "../../src/Lista";
import inverterLista from "../../src/Lista3/Questao_4";


let l;

beforeEach(
    () =>{
        l = new Lista();
    }
);

test("Invertendo uma lista 1",
    () =>{
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        l.append(6);
        l.append(7);

        expect(inverterLista(l)).toStrictEqual([7,6,5,4,3,2,1]);
    }
);
test("Invertendo uma lista 2",
    () =>{
        l = new Lista();

        l.append(10);
        l.append(142);
        l.append(34);

        expect(inverterLista(l)).toStrictEqual([34,142,10]);
    }
);