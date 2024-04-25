class PilhaBinario{
    
    constructor(){
        this.topo=0;
        this.dados = [];
    }

    isEmpty(){
        return this.topo === 0;
    }

    size(){
        return this.topo;
    }

    push(dado){
        this.dados[this.topo++] = dado;
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

    clear(){
        this.topo = 0;
    }

    toString(){
        let texto = "";

        for(let i of this.dados){
            texto += i + " ";
        }

        return texto;
    }
}

export default PilhaBinario;