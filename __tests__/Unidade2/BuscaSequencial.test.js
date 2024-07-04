import buscaSequencial from "../../src/Unidade2/BuscaSequencial";

test("Array: [1,2,3,4,5,6]. Chave: 4", ()=>{
    expect(buscaSequencial(4, [1,2,3,4,5,6])).toBe(4);
});

test("Array: [6,5,4,3,2,1]. Chave: 7", ()=>{
    expect(buscaSequencial(7, [6,5,4,3,2,1])).toBe(null);
});

test("Array: [1,2,3,4,5,6]. Chave: 2", ()=>{
    expect(buscaSequencial(2, [6,5,4,3,2,1])).toBe(2);
});

test("Array: [6,5,1,9,8,10,45,2325,2]. Chave: 2325", ()=>{
    expect(buscaSequencial(2325, [6,5,1,9,8,10,45,2325,2])).toBe(2325);
});

test("Array: [6,5,1,9,8,10,45,2325,2]. Chave: 143", ()=>{
    expect(buscaSequencial(143, [6,5,1,9,8,10,45,2325,2])).toBe(null);
});