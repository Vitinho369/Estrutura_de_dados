import Pilha from "../src/Pilha";

let pilha;

beforeEach(
    () =>{
        pilha = new Pilha();
    }
);

test("Inserir elementos na lista",
    () =>{
        pilha.push("A");
        pilha.push("B");
        expect(pilha.top()).toBe("B")
    }
);


test("Remover elementos na lista",
    () =>{
        pilha.push("A");
        pilha.push("B");
        pilha.push("C");
        pilha.push("D");
        pilha.pop();
        expect(pilha.top()).toBe("C")
    }
);

test("Verificar se está vazia e cheia",
    () =>{
        expect(pilha.isEmpty()).toBe(true);
        expect(pilha.isFull()).toBe(false);
    }
);

test("Verificar se posso limpar lista",
    ()=>{
        pilha.push("A");
        pilha.push("B");
        pilha.push("C");
        pilha.push("D");
        pilha.clear();
        expect(pilha.isEmpty()).toBe(true);
    }
); 