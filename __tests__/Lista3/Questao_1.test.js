import PilhaLista from "../../src/Lista3/Questao_1";

let p;

beforeEach(
    () => {
        p = new PilhaLista();
    }
);

test("Pilha instanciada é vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
    }
);

test("Inserções",
    () => {
        p.push("A");
        expect(p.top()).toBe("A");
        p.push("B");
        expect(p.top()).toBe("B");
        p.push("C");
        expect(p.top()).toBe("C");
        p.push("D");
        expect(p.top()).toBe("D");
        p.push("E");
        expect(p.top()).toBe("E");
    }
);

test("Underflow",
    () => {
        expect(() => p.pop()).toThrow("Stackunderflow");
    }
);

test("Tamanho da Pilha recem instanciada é zero",
    () => {
        expect(p.size()).toBe(0);
    }
);

test("A pilha recem instanciada após um push o tamanho é 1",
    () => {
        p.push('A')
        expect(p.size()).toBe(1);
    }
);

test("Outro teste de LIFO",
    () => {
        p.push('A');
        p.push('B');
        p.pop();
        expect(p.top()).toBe('A');
    }
);