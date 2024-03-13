class Pilha{

    constructor(){
        this.dados = [];
        this.topo = 0;
    }

    // isFull(){
    //     return this.top === this.tam;
    // }

    isEmpty(){
        return this.topo === 0;
    }

    push(dado){
        // if(!this.isFull()){
            this.dados[this.topo++] = dado;
        //     return;
        // }

        // throw new Error("Stackoverflow");
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
        this.topo=0;
    }

    toString(){
        let texto="";
        for(let i =0; i < this.size();i++){
            texto += this.dados[i] + " ";
        }

        console.log(texto)
    }
}

let pilha = new Pilha();

const inverter = (texto) =>{
    let pilhaInverte = "";
    for(letra of texto){
        pilha.push(letra);
    }

    let tam = pilha.size();
    for(let i =0; i < tam;i++){
        pilhaInverte +=pilha.top();
        pilha.pop();
    }

    console.log(pilhaInverte);
}

inverter("ABACAXI")