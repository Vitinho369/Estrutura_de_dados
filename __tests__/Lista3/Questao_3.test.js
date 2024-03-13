import ListaArray from "../../src/Lista3/Questao_3";

let l;

beforeEach(
    () =>{
        l = new ListaArray();
    }
);

test("Verifjcar tamanho da lista recem instanciada",
    () =>{
        expect(l.length()).toBe(0);
        expect(l.isEmpty()).toBe(true);
    }
);

test("Verificar tamanho da lista",
    () =>{

        l.add(1);
        l.add(2);
        l.add(3);
        l.add(4);

        expect(l.length()).toBe(4);
        expect(l.isEmpty()).toBe(false);
    }
);


test("Verificar função as array",
    () =>{

        l.add(1);
        l.add(2);
        l.add(3);
        l.add(4);

        expect(l.asArray()).toStrictEqual([4,3,2,1]);
    }
);


test("Verificar função as array com método append",
    () =>{

        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);

        expect(l.asArray()).toStrictEqual([1,2,3,4]);
    }
);

test("Verificar função as array com método add e append",
    () =>{

        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.add(5);
        l.add(6);

        expect(l.asArray()).toStrictEqual([6,5,1,2,3,4]);
    }
);

test("Testando removeAt",
    () =>{

        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.add(5);
        l.add(6);
        expect(l.asArray()).toStrictEqual([6,5,1,2,3,4]);

        l.removeAt(0);
        expect(l.asArray()).toStrictEqual([5,1,2,3,4]);

        l.removeAt(3);
        expect(l.asArray()).toStrictEqual([5,1,2,4]);

        l.removeAt(3);
        expect(l.asArray()).toStrictEqual([5,1,2]);

    }
);

test("Testando o addAt",
    () =>{
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.add(5);
        l.add(6);
        expect(l.asArray()).toStrictEqual([6,5,1,2,3,4]);

        l.addAt(0,0);
        expect(l.asArray()).toStrictEqual([0,6,5,1,2,3,4]);

        l.addAt(20,4);
        expect(l.asArray()).toStrictEqual([0,6,5,1,20,2,3,4]);
    }
);


test("Testando o método get",
    () =>{
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.add(5);
        l.add(6);
      
        expect(l.get(0)).toBe(6);
        expect(l.get(4)).toBe(3);
        expect(l.get(5)).toBe(4);
    }
);