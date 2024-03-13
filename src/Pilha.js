class Pilha{

    constructor(tam = 5){
        this.dados = [];
        this.tam  = tam;
        this.topo = 0;
    }

    push(dado) {
        if(!this.isFull()){
            this.dados[this.topo++] = dado;
            return;
        }

        throw new Error("Stackoverflow");
    }
    
    pop() {
        if(!this.isEmpty()){
            this.topo--;
            return;
        }
    
        throw new Error("Stackunderflow");
    }

    top() {
        return this.dados[this.topo-1];
    }

    isEmpty() {
        return this.topo === 0;
    }
    isFull() {
        return this.topo === this.tam;
    }

    clear() {
        this.topo = 0;
    }

    size() {
        return this.topo;
    }

}

export default Pilha;