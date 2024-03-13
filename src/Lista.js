import No from "./No.js";

/**
    * Create a List.
    * @constructor
    */
class Lista{
    constructor(){
        this.cabeca = new No();
        this.size = 0;
    }

   /**
    * Adiciona elemento no início da lista.* 
    * @param {dado} data - The data added.
    */ 
    add(dado){
        let novo_no = new No(dado);

        novo_no.proximo = this.cabeca.proximo;
        this.cabeca.proximo = novo_no;
        this.size++;
    }  

    /**
    * Adiciona elemento no início da lista.* 
    * @param {dado} dado - O dado adicionado.
    * @param {pos} pos - A posição que se deseja adicionar o dado.
    */ 
    addAt(dado,pos){

        if(pos < this.length()){
            let novoNo = new No(dado);
            let count=0;
            let aux = this.cabeca;

            while(count < pos){
                aux = aux.proximo;
                count++;
            }

            novoNo.proximo = aux.proximo;
            aux.proximo = novoNo;
            this.size++;
        }
    }

    /**
    * Adiciona elemento no fim da lista.
    * @param {dado} data - The data added.
    */ 
    append(dado){
        let novo_no = new No(dado);
        let aux = this.cabeca;

        while(aux.proximo != null){
            aux = aux.proximo;
        }

        aux.proximo = novo_no;
        this.size++;
    }
  
    /**
    * Remove o primeiro elemento da lista.
    */ 
    removeFirts(){
        if(!this.isEmpty()){
            let aux = this.cabeca.proximo;
            this.cabeca = aux.proximo;
            this.size--; 
        }

        return new Error("Underflow");
    }

    /**
    * Remove o último elemento da lista.
    */ 
    removeLast(){
        if(!this.isEmpty()){
            let aux = this.cabeca;

            while(aux.proximo != null){
                aux = aux.proximo;
            }
            this.aux = aux.proximo;
            this.size--; 
        }

        return new Error("Underflow");
    }

    /**
    * Remove um elemento de uma posição específica da lista
    * @param {pos} pos - A posição que se deseja remover
    */ 
    removeAt(pos){

        if(!this.isEmpty() && pos < this.length()){
            let count=0;
            let aux = this.cabeca;

            while(count < pos){
                aux = aux.proximo;
                count++;
            }

            let proximoNo = aux.proximo;

            if(proximoNo != null){
                aux.proximo = proximoNo.proximo;
                return;
            }

            aux.proximo = null;
            this.size--;
        }
    }

    /**
    * Recupera um elemento da lista pelo id
    */ 
    get(id){

        if(!this.isEmpty() && id < this.length()){
            let count=0;
            let aux = this.cabeca;

            while(count <= id){
                aux = aux.proximo;
                count++;
            }

            return aux.dado;
        }
    }

    /**
    * Verifica se a lista está vazia
    */ 
    isEmpty(){
        return this.size === 0;
    }
    /**
    * Retorna o tamaho da lista
    */ 
    length(){
        return this.size;
    }
    /**
    * Retorna a lista como um array
    */ 
    asArray(){
        let array = [];

        let dados = this.cabeca.proximo;
        
        while(dados !=  null){
            array.push(dados.dado);
            dados = dados.proximo;
        }

        return array;
    }
}

export default Lista;