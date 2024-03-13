class Pilha{

    constructor(){
        this.dados = [];
        this.topo = 0;
    }

    top(){
        return this.dados[this.topo-1];
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
    
    isEmpty(){
        return this.topo === 0;
    }

    size(){
        return this.topo;
    }

    clear(){
        this.topo = 0;
    }

    toString(){
        let texto="";

        for(let i=0; i < this.size();i++){
            if(i != this.size()-1){
                texto += i + " ";
                continue;
            }

            texto += i;
        }
    }
}

export default Pilha;