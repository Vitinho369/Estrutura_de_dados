class No{
    constructor(dado =  null){
        this.dado = dado;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteEncadeada{
    constructor(){
        this.cabeca = null;
        this.cauda = null;
    }

    length(){
        let size = 0;
        let aux = this.cabeca;

        while(aux !== null){
            aux = aux.proximo;
            size++;
        }

        return size;
    }

    isEmpty(){
        return this.length() === 0;
    }

    add(dado){
        let novoNo = new No(dado);

        if(this.isEmpty()){
            this.cabeca = novoNo;
            this.cauda = novoNo;
            return;
        }
        let aux = this.cabeca;
        this.cabeca = novoNo;
        this.cabeca.proximo = aux;
        aux.anterior = this.cabeca;
    }

    append(dado){
        let novoNo = new No(dado);

        if(this.isEmpty()){
            this.cabeca = novoNo;
            this.cauda = novoNo;
            return;
        }

        this.cauda.proximo = novoNo;
        novoNo.anterior = this.cauda;
        this.cauda = novoNo;
    }

    asArray(){
        let array = []
        let aux = this.cabeca;

        while(aux !==  null){
            array.push(aux.dado);
            aux = aux.proximo;
        }

        return array;
    }

    remove(){
        if(!this.isEmpty()){
            let aux = this.cabeca.proximo;

            if(aux === null){
                this.clear();
                return;
            }

            this.cabeca = aux;
            this.cabeca.anterior = null;
            return;
        }

        throw new Error("Underflow");
    }

    removeLast(){
        if(!this.isEmpty()){
            let aux = this.cauda.anterior;

            if(aux === null){
                this.clear();
                return;
            }

            this.cauda = aux;
            this.cauda.proximo = null;
            return;
        }

        throw new Error("Underflow");
    }

    clear(){
        this.cabeca = null;
        this.cauda = null;
    }
}

export default ListaDuplamenteEncadeada;