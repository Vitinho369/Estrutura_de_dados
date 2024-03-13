import FilaLista from "../../src/Lista3/Questao_2";

let f;

beforeEach(
    () => {
        f = new FilaLista(5);
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
    }
);

test("Inserções",
    () => {
        f.enqueue("A");
        expect(f.front()).toBe("A");
        f.enqueue("B");
        expect(f.front()).toBe("A");
        f.enqueue("C");
        expect(f.front()).toBe("A");
        f.enqueue("D");
        expect(f.front()).toBe("A");
        f.enqueue("E");
        expect(f.front()).toBe("A");
    }
);

test("Underflow",
    () => {
        expect(() => f.dequeue()).toThrow("Queueunderflow");
    }
);

test("Tamanho da Pilha recem instanciada é zero",
    () => {
        expect(f.length()).toBe(0);
    }
);

test("A pilha recem instanciada após um push o tamanho é 1",
    () => {
        f.enqueue('A')
        expect(f.length()).toBe(1);
    }
);

test("Outro teste de FIFO",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);