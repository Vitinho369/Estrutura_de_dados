import bubblesort from "../../src/Unidade2/Bubblesort";

test("Ordenando array", ()=>{
    let array = [5,4,3,2,1];

    expect(bubblesort(array)).toStrictEqual([1,2,3,4,5]);
});


test("Ordenando array2", ()=>{
    let array2 = [6,1,5,3,2,4];

    expect(bubblesort(array2)).toStrictEqual([1,2,3,4,5,6]);
});


test("Ordenando array3", ()=>{
    let array3 = [77, 90, 42, 82, 18, 38, 60, 60, 62, 12];

    expect(bubblesort(array3)).toStrictEqual([12,18,38,42,60,60,62,77,82,90]);
});