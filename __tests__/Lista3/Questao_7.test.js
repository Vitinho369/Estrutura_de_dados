import josephus from "../../src/Lista3/Questao_7";
import Lista from "../../src/Lista";

let l;

beforeEach(
    () =>{
        l = new Lista();
    }
);

test("teste com 5 pessoas e passo 3",
    () =>{
        l.append(1)
        l.append(2)
        l.append(3)
        l.append(4)
        l.append(5)

        expect(josephus(l, 3)).toBe(3);
    }
);


test("teste com 5 pessoas e passo 2",
    () =>{
        l.append(1)
        l.append(2)
        l.append(3)
        l.append(4)
        l.append(5)

        expect(josephus(l, 2)).toBe(2);
    }
);


test("teste com 10 pessoas e passo 7",
    () =>{
        for(let i=1; i <= 10;i++){
            l.append(i);
        }

        expect(josephus(l, 7)).toBe(8);
    }
);

test("Teste com 41 pessoas e passo 3 (teste da questao)",
    () =>{

        for(let i=1; i <= 41;i++){
            l.append(i);
        }

        expect(josephus(l,3)).toBe(30);
    }
);