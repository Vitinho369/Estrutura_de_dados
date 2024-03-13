import PilhaBinario from "../../src/Lista1/Questao_4"

const converteBinario = (numero) =>{
    let pilhaBin = new PilhaBinario();
    let divisao = numero;
    do{
        pilhaBin.push(divisao%2);
        divisao = Math.floor(divisao/2);
    }while(divisao > 0);

    let tam = pilhaBin.size();
    let texto = "";
    for(let i=0; i < tam;i++){
        texto += pilhaBin.top();
        pilhaBin.pop();
    }
    return texto;
};

test("Converter 100 para binario",
    () =>{
        expect(converteBinario(10)).toBe("1010");
    }
);

test("Converter 1158 para binario",
    () =>{
        expect(converteBinario(1158)).toBe("10010000110");
    }
);

test("Converter 34 para binario",
    () =>{
        expect(converteBinario(34)).toBe("100010");
    }
);