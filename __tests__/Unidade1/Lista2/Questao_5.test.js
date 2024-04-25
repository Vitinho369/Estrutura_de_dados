import Deque from "../../../src/Unidade1/Lista2/Questao_5";

let deque;

beforeEach(
    () =>{
        deque = new Deque(7);
    }
);

test("Inserir no início de um Deque",
    () =>{
        deque.inserirInicio("A");
        deque.inserirInicio("B");
        deque.inserirInicio("C");

        expect(deque.frontInicio()).toBe("A");
    }
);

test("Remover do início de um Deque",
    () =>{
        deque.inserirInicio("A");
        deque.inserirInicio("B");
        deque.inserirInicio("C");

        deque.removerInicio();
        expect(deque.frontInicio()).toBe("B");
        
        deque.removerInicio();
        expect(deque.frontInicio()).toBe("C");
    }
);

test("Inserir no fim de um Deque",
    () =>{
        deque.inserirFim("A");
        deque.inserirFim("B");
        deque.inserirFim("C");

        expect(deque.frontFim()).toBe("A");
    }
);


test("Remover do fim de um Deque",
    () =>{
        deque.inserirFim("A");
        deque.inserirFim("B");
        deque.inserirFim("C");

        deque.removerFim();
        expect(deque.frontFim()).toBe("B");
        
        deque.removerFim();
        expect(deque.frontFim()).toBe("C");
    }
);