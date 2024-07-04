import buscaBinaria from "../../src/Unidade2/Buscabinaria";

test("[1,2,3,4,5] busco a chave 4", ()=>{
    expect(buscaBinaria(4,[1,2,3,4,5])).toBe(4);
});

test("[1,2,3,4,5] busco a chave 3", ()=>{
    expect(buscaBinaria(3,[1,2,3,4,5])).toBe(3);
});

test("[1,2,3,4,5] busco a chave 5", ()=>{
    expect(buscaBinaria(5,[1,2,3,4,5])).toBe(5);
});

test("[1,2,3,4,5,6,7,8,9,10] busco a chave 10", ()=>{
    expect(buscaBinaria(10,[1,2,3,4,5,6,7,8,9,10])).toBe(10);
});

test("[1,2,3,4,5,6,7,8,9,10] busco a chave 8", ()=>{
    expect(buscaBinaria(8,[1,2,3,4,5,6,7,8,9,10])).toBe(8);
});

test("[1,2,3,4,5,6,7,8,9,10] busco a chave 3", ()=>{
    expect(buscaBinaria(3,[1,2,3,4,5,6,7,8,9,10])).toBe(3);
});

test("[1,6,9,14,15,21,25,30,40] busco a chave 25", ()=>{
    expect(buscaBinaria(25,[1,6,9,14,15,21,25,30,40])).toBe(25);
});