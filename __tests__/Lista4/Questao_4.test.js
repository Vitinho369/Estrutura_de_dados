import mega_sena from "../../src/Lista4/Questao_4";

let mega;
let numSorteio;

test("Teste sena", 
    ()=>{
        mega = [[1,2,3,4,5,6],
                [2,3,4,5,6,7],
                [8,9,10,11,12,13],
                [20,21,22,23,24,25],
                ]

        numSorteio = [20,21,22,23,24,25];

        expect(mega_sena(mega, numSorteio)).toStrictEqual(6);
    }
);

test("Teste quina", 
    ()=>{
        mega = [[1,2,3,4,5,6],
                [2,3,4,5,6,7],
                [8,9,10,11,12,13],
                [20,21,22,23,24,25],
                ]

        numSorteio = [1,2,3,4,5,0];

        expect(mega_sena(mega, numSorteio)).toStrictEqual(5);
    }
);

test("Teste ganhou nada", 
    ()=>{
        mega = [[1,2,3,4,5,6],
                [2,3,4,5,6,7],
                [8,9,10,11,12,13],
                [20,21,22,23,24,25],
                ]

        numSorteio = [1,2,3,4,7,8];

        expect(mega_sena(mega, numSorteio)).toStrictEqual(0);
    }
);