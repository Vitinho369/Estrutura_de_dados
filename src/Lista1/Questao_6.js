class Pilha{
    constructor(){
        this.dados = [];
        this.topo = 0;
    }


    isEmpty(){
        return this.topo === 0;
    }

    push(dado){
        this.dados[this.topo++] = dado;
    }

    pop(){
        if(!this.isEmpty()){
            this.topo--;
            return;
        }

        throw new Error("Stackundeflow");
    }

    size(){
        return this.topo;
    }

    top(){
        return this.dados[this.topo-1];
    }

    toString(){
        let texto = "";

        for(let i=0; i < this.topo;i++){
            texto += this.dados[i];
        }

        return texto;
    }
}


const isOperacao = (operacao) =>{
    return operacao === "+" || operacao === "-" || operacao === "*" || operacao === "/" || operacao === "^";
}

const rpn =  (expressao) =>{
    let expressaoRPN = "";
    let operadores = new Pilha();
    let count = 0;
    let abreParentese = false;

    for(let i=0; i < expressao.length;i++){

        if(isOperacao(expressao[i])){
            operadores.push(expressao[i]);
        }else if(expressao[i] !== "(" && expressao[i] !== ")"){
            expressaoRPN += expressao[i];
            count++;
        }

        // if((expressao[i] == "*" || expressao[i] == "/") && operadores.size() > 2){
        //     let aux = operadores.top();
        //     operadores.pop();
        //     let aux2 = operadores.top();
        //     operadores.pop()
        //     operadores.push(aux);
        //     operadores.push(aux2);
        //     count--;
        // }
        
        if(((count === 2) || expressao[i] === ")") && !operadores.isEmpty()){
            count=0;
            expressaoRPN += operadores.top();
            operadores.pop();
        }else if(expressao[i] === "("){
            count=0;
        }
    }

    if(!operadores.isEmpty()){
        let tam = operadores.size();
        for(let i=0; i < tam;i++){
            expressaoRPN += operadores.top();
            operadores.pop();
        }
    }

    return expressaoRPN;
}

export default rpn;