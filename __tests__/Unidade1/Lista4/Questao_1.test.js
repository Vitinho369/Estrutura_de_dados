import Heap from "../../../src/Unidade1/Lista4/Questao_1";

let h;

beforeEach(
    () =>{
        h = new Heap();
    }
);

test("Heap recém instanciado é vazio",
    () =>{
        expect(h.isEmpty()).toBe(true);
    }
);

test("Heap vazio ao inserir elemento",
    () =>{
        h.insert(90, 1);
        expect(h.isEmpty()).toBe(false);
    }
);

test("Heap não é vazio ao inserir elemento",
    () =>{
        h.insert(90,1);
        expect(h.isEmpty()).toBe(false);
    }
);

test("Heap respeita a pririodade de Heap Minímo",
    () =>{
        h.insert(90, 4);
        h.insert(9, 2);
        h.insert(100, 1);
        h.insert(5,3);
        h.insert(0,1);
        expect(h.getFather()).toBe(100);
    }
);

test("Heap respeita a pririodade de Heap Minímo quando o pai é removido",
    () =>{
        h.insert(90, 4);
        h.insert(9, 2);
        h.insert(100, 1);
        h.insert(5,3);
        h.insert(0,0);

        h.remove();
        expect(h.getFather()).toBe(100);

        h.remove();
        expect(h.getFather()).toBe(9);
        
        h.remove();
        expect(h.getFather()).toBe(5);
    }
);

test("Heap respeita a pririodade de Heap Minímo quando é adicionado novo elemento após remoção",
    () =>{
        h.insert(90, 4);
        h.insert(9, 2);
        h.insert(100, 1);
        h.insert(5,3);
        h.insert(0,0);

        h.remove();
        expect(h.getFather()).toBe(100);

        h.insert(80, 0);
        expect(h.getFather()).toBe(80);
        
    }
);

test("Teste HeapSort 1",
    () =>{
        h.insert(90, 4);
        h.insert(900, 7);
        h.insert(0,1);
        h.insert(9, 3);
        h.insert(100, 5);
        h.insert(5,2);
        h.insert(500,6);

        let sorted = []

        while(!h.isEmpty()){
            sorted.push(h.remove());
        }
        
        expect(sorted).toStrictEqual([0,5,9,90,100, 500, 900]);
    }
);


test("Teste HeapSort 1 2",
    () =>{
        h.insert(567,8);
        h.insert(90, 4);
        h.insert(5,2);
        h.insert(0,1);
        h.insert(901,10);
        h.insert(9, 3);
        h.insert(245,6);
        h.insert(100, 5);
        h.insert(700,9);
        h.insert(300,7);

        let sorted = []
        
        while(!h.isEmpty()){
            sorted.push(h.remove());
        }
        
        expect(sorted).toStrictEqual([0,5,9,90,100,245,300,567,700,901]);
    }
);