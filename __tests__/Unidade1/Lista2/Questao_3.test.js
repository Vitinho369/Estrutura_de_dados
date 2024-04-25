import GerenciarCaminhoes from "../../../src/Unidade1/Lista2/Questao_3";

let filaC;

beforeEach(
    () =>{
        filaC = new GerenciarCaminhoes();
    }
);

test("Chegada caminhão",
    () =>{
        filaC.chegadaCaminhoneiro("Vitor");
        filaC.chegadaCaminhoneiro("Joao");
        filaC.chegadaCaminhoneiro("Pedro");

        expect(filaC.verificarProximo()).toBe("Vitor");
    }
);

test("Atender caminhão",
    () =>{ 

        expect(filaC.verificarProximo()).toBe("Fila vazia");
        filaC.chegadaCaminhoneiro("Vitor");
        filaC.chegadaCaminhoneiro("Joao");
        filaC.chegadaCaminhoneiro("Pedro");
        filaC.chegadaCaminhoneiro("Maria");
        filaC.chegadaCaminhoneiro("Chiquinha");

        filaC.atenderCaminhao();
        filaC.atenderCaminhao();
        filaC.atenderCaminhao();

        expect(filaC.verificarProximo()).toBe("Maria");
    }
);

test("Verificar se o número de carregamentos foi atingido",
    () =>{
        filaC.chegadaCaminhoneiro("Vitor");
        filaC.chegadaCaminhoneiro("Joao");
        filaC.chegadaCaminhoneiro("Pedro");
        filaC.chegadaCaminhoneiro("Maria");
        expect(filaC.qtdAtingida()).toBe(false);
        
        filaC.chegadaCaminhoneiro("Chiquinha");
        filaC.chegadaCaminhoneiro("Maria");
        filaC.chegadaCaminhoneiro("Chiquinha");
        filaC.chegadaCaminhoneiro("Maria");
        filaC.chegadaCaminhoneiro("Chiquinha");
        filaC.chegadaCaminhoneiro("Maria");

        expect(filaC.qtdAtingida()).toBe(true);

        filaC.atenderCaminhao();
        filaC.atenderCaminhao();
        filaC.atenderCaminhao();
        filaC.atenderCaminhao();
        expect(filaC.chegadaCaminhoneiro("Maria")).toBe("Limite de caminhoes diarios atingido")
    }
);

test("Listar caminhoneiros",
    () =>{
        filaC.chegadaCaminhoneiro("Vitor");
        filaC.chegadaCaminhoneiro("Joao");
        filaC.chegadaCaminhoneiro("Pedro");
        filaC.chegadaCaminhoneiro("Maria");

        expect(filaC.listarCamAguardo()).toBe("Vitor Joao Pedro Maria ");

        filaC.atenderCaminhao();
        filaC.atenderCaminhao();

        expect(filaC.listarCamAguardo()).toBe("Pedro Maria ");

        filaC.chegadaCaminhoneiro("Chiquinha");
        filaC.chegadaCaminhoneiro("Alisson");
        filaC.chegadaCaminhoneiro("Pedro");
        
        expect(filaC.listarCamAguardo()).toBe("Pedro Maria Chiquinha Alisson Pedro ");
    }
);