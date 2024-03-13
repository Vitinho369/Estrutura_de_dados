class Pilha{
    constructor(tam=5){
        this.dados = [];
        this.topo = 0;    
        this.tam = tam;
    }

    isFull(){
        return this.topo === this.tam;
    }

    isEmpty(){
        return this.topo === 0;
    }

    push(dado){
        if(!this.isFull()){
            this.dados[this.topo++] = dado;
            return;
        }

        throw new Error("Stackoverflow");
    }

    pop(){
        if(!this.isEmpty()){
            this.topo--;
            return;
        }

        throw new Error("Stackunderflow");
    }

    top(){
        return this.dados[this.topo-1];
    }

    size(){
        return this.topo;
    }

    clear(){
        this.topo = 0;
    }

    toString(){
        let texto = "";

        for(let i=0; i < this.topo; i ++){
            if(i != this.topo -1){
                texto += this.dados[i] + " ";
                continue;
            }
            
            texto += this.dados[i];
        }

        return texto;
    }
}

export default Pilha;