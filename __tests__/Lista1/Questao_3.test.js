import Pilha from "../../src/Lista1/Questao_3";

let pilhaInit;
let pilhaAux;

beforeEach(
    () =>{
        pilhaInit = new Pilha();
        pilhaAux = new Pilha();
    }
);

test("Inverter 5 Elementos",

    () =>{
        pilhaInit.push(1);
        pilhaInit.push(2);
        pilhaInit.push(3);
        pilhaInit.push(4);
        pilhaInit.push(5);

        expect(pilhaInit.toString()).toBe("1 2 3 4 5")

        let aux = pilhaInit.top(); // Pega o último elemento e guarda
        
        let tam = pilhaInit.size();

        for(let i=0; i < tam; i++){ //Inverte a pilha
            pilhaAux.push(pilhaInit.top());
            pilhaInit.pop();
        }


        pilhaInit.push(aux); // Coloca o último elemento na primeira posição

        for(let i=0; i < tam-1; i++){//Desinverte e pilha
            if(i == 0){
                aux = pilhaAux.top(); // Pega o primeiro elemento e guarda
                pilhaAux.pop();
            }

            pilhaInit.push(pilhaAux.top());
            pilhaAux.pop();
        }
        
        pilhaInit.pop();
        pilhaInit.push(aux);//Coloca o primeiro elemento na última posição

        expect(pilhaInit.toString()).toBe("5 2 3 4 1")
    }
);

test("Inverter 10 Elementos",

    () =>{

        pilhaAux = new Pilha(10);
        pilhaInit = new Pilha(10);

        pilhaInit.push(1);
        pilhaInit.push(2);
        pilhaInit.push(3);
        pilhaInit.push(4);
        pilhaInit.push(5);
        pilhaInit.push(6);
        pilhaInit.push(7);
        pilhaInit.push(8);
        pilhaInit.push(9);
        pilhaInit.push(10);

        expect(pilhaInit.toString()).toBe("1 2 3 4 5 6 7 8 9 10")

        let aux = pilhaInit.top(); // Pega o último elemento e guarda
        
        let tam = pilhaInit.size();

        for(let i=0; i < tam; i++){ //Inverte a pilha
            pilhaAux.push(pilhaInit.top());
            pilhaInit.pop();
        }


        pilhaInit.push(aux); // Coloca o último elemento na primeira posição

        for(let i=0; i < tam-1; i++){//Desinverte e pilha
            if(i == 0){
                aux = pilhaAux.top(); // Pega o primeiro elemento e guarda
                pilhaAux.pop();
            }

            pilhaInit.push(pilhaAux.top());
            pilhaAux.pop();
        }
        
        pilhaInit.pop();
        pilhaInit.push(aux);//Coloca o primeiro elemento na última posição

        expect(pilhaInit.toString()).toBe("10 2 3 4 5 6 7 8 9 1")
    }
);
