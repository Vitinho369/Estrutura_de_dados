import insertionsort from "../../src/Unidade2/Insertionsort";

test("Ordenando array", ()=>{
    let array = [5,4,3,2,1];

    expect(insertionsort(array)).toStrictEqual([1,2,3,4,5]);
});


test("Ordenando array2", ()=>{
    let array2 = [6,1,5,3,2,4];

    expect(insertionsort(array2)).toStrictEqual([1,2,3,4,5,6]);
});

test("Ordenando array3", ()=>{
    let array3 = [77, 90, 42, 82, 18, 38, 60, 60, 62, 12];

    expect(insertionsort(array3)).toStrictEqual([12,18,38,42,60,60,62,77,82,90]);
});