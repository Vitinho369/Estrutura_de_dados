import buscaSeqSentinela from "../../src/Unidade2/BuscaSeqSentinela";


test("Array: [1,2,3,4,5,6]. Chave: 4", ()=>{
    expect(buscaSeqSentinela(4, [1,2,3,4,5,6])).toBe(4);
});

test("Array: [6,5,4,3,2,1]. Chave: 7", ()=>{
    expect(buscaSeqSentinela(7, [6,5,4,3,2,1])).toBe(null);
});

test("Array: [1,2,3,4,5,6]. Chave: 2", ()=>{
    expect(buscaSeqSentinela(2, [6,5,4,3,2,1])).toBe(2);
});

test("Array: [6,5,1,9,8,10,45,2325,2]. Chave: 2325", ()=>{
    expect(buscaSeqSentinela(2325, [6,5,1,9,8,10,45,2325,2])).toBe(2325);
});

test("Array: [6,5,1,9,8,10,45,2325,2]. Chave: 143", ()=>{
    expect(buscaSeqSentinela(143, [6,5,1,9,8,10,45,2325,2])).toBe(null);
});