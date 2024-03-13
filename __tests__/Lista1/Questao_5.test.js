import Pilha from "../../src/Lista1/Questao_5";

let pilha;

const verifica = (pilha) =>{

    let contAbreParentese=0;
    let contFechaParentese=0;
    let contAbreColchete=0;
    let contFechaColchete=0;
    let tam = pilha.size();

    for(let i = 0; i < tam;i++){
        let aux  = pilha.top();
        pilha.pop();
        
        if(aux === "("){
            contAbreParentese++;
            continue;
        }

        if(aux === ")"){
            contFechaParentese++;
            continue;
        }

        if(aux === "["){
            contAbreColchete++;
            continue;
        }

        if(aux === "]")
            contFechaColchete++;
    }

    return contAbreParentese === contFechaParentese && contAbreColchete === contFechaColchete;
}

beforeEach(
    () =>{
        pilha = new Pilha();
    }
);

test("Primeiro teste",
    () =>{
        pilha.push("[");
        pilha.push("(");
        pilha.push(")");
        pilha.push("[");
        pilha.push("(");
        pilha.push(")");
        pilha.push("]");
        pilha.push("]");
        pilha.push("(");
        pilha.push(")");
        expect(verifica(pilha)).toBe(true);
    }
);


test("Segundo teste",
    () =>{
        pilha.push("(");
        pilha.push("(");
        pilha.push(")");
        pilha.push("]");
        expect(verifica(pilha)).toBe(false);
    }
);

test("Terceiro teste",
    () =>{
        pilha.push("[");
        pilha.push("[");
        pilha.push("4");
        pilha.push(")");
        pilha.push(" ");
        pilha.push("+");
        pilha.push(" ");
        pilha.push("(");
        pilha.push("3");
        pilha.push(")");
        pilha.push("]");
        pilha.push("]");
        expect(verifica(pilha)).toBe(false);
    }
);