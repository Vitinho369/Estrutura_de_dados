import Pilha from "../Pilha";

const isOperacao = (operacao) =>{
    return operacao === "+" || operacao === "-" || operacao === "*" || operacao === "/" || operacao === "^";
}

const rpn =  (expressao) =>{
    let expressaoRPN = "";
    let operadores = new Pilha();
    let parentese = false;

    for(let i=0; i < expressao.length;i++){

       
        if(expressao[i] != "(" && expressao[i] != ")" && !isOperacao(expressao[i])){
            expressaoRPN += expressao[i];
        }else if(isOperacao(expressao[i])){

            if(expressao[i] !== "*" && expressao[i] !== "/" && expressao[i] !== "^" && !parentese){
                let op = operadores.top();

                if((op === "*" || op === "/" || op === "^")){
                    operadores.pop();
                    // operadores.push(op);
                    expressaoRPN += op;
                    if(!operadores.isEmpty()){
                        expressaoRPN += operadores.top();
                        operadores.pop();
                    }
                    operadores.push(expressao[i]);
                }else{
                    operadores.push(expressao[i]);
                }
            }else{
                operadores.push(expressao[i]);
            }
            
        }else if(expressao[i] == ")" && !operadores.isEmpty()){
            parentese = true;
            expressaoRPN += operadores.top();
            operadores.pop();
        }
    }
    console.log(operadores.toString())
    if(!operadores.isEmpty()){
        let tam = operadores.size();
        for(let i=0; i < tam;i++){
            console.log(operadores.top())
            expressaoRPN += operadores.top();
            operadores.pop();
        }
    }

    return expressaoRPN;
}

export default rpn;