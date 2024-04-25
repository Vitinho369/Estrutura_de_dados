import Lista from "../Lista";

class PilhaLista{

    constructor(){
        this.pilha = new Lista();
    }

    isEmpty(){
        return this.pilha.isEmpty();
    }

    push(dado){
        this.pilha.append(dado);
    }

    pop(){
        if(!this.isEmpty()){
            this.pilha.removeLast();
            return;
        }

        throw new Error("Stackunderflow");
    }

    size(){
        return this.pilha.length();
    }

    top(){
        return this.pilha.asArray()[this.pilha.length()-1];
    }

    clear(){
        while(!this.pilha.isEmpty())
            this.pilha.removeLast();
    }
}

export default PilhaLista;