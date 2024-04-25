import Fila from "../Fila";

class PilhaFila{
    constructor(tam = 5){
        this.fila_a = new Fila(tam);
        this.fila_b = new Fila(tam);
    }

    isEmpty(){
        return this.fila_a.length() >= this.fila_b.length() ? this.fila_a.isEmpty() : this.fila_b.isEmpty();
    }

    isFull(){
        return  this.fila_a.length() >= this.fila_b.length()? this.fila_a.isFull() : this.fila_b.isFull(); 
    }

    push(dado){

        if(!this.isFull()){
            if(this.fila_a.length() >= this.fila_b.length()){
                this.fila_a.enqueue(dado);
            }else{
                this.fila_b.enqueue(dado);
            }
            return;
        }

        throw new Error("Stackoverflow");
    }

    pop(){
        if(!this.isEmpty()){
            if(this.fila_a.length() >= this.fila_b.length()){
                let tam = this.fila_a.length()-1;
                for(let i=0; i < tam;i++){
                    this.fila_b.enqueue(this.fila_a.front());
                    this.fila_a.dequeue();
                }
                this.fila_a.dequeue();
            }else{
                let tam = this.fila_b.length()-1;
                for(let i=0; i < tam;i++){
                    this.fila_a.enqueue(this.fila_b.front());
                    this.fila_b.dequeue();
                }

                this.fila_b.dequeue();
            }
            return;
        }

        throw new Error("Stackunderflow");
    }

    top(){
        let topo;
        if(this.fila_a.length() >= this.fila_b.length()){
            let tam = this.fila_a.length();
            for(let i=0; i < tam;i++){
                topo = this.fila_a.front();
                this.fila_a.dequeue();
            }

        }else{
            let tam = this.fila_b.length();
            for(let i=0; i < tam;i++){
                topo = this.fila_b.front();
                this.fila_b.dequeue();
            }
        }

        return topo;
    }

    size(){
        return this.fila_a.length() >= this.fila_b.length()? this.fila_a.length(): this.fila_a.length();
    }
}

export default PilhaFila;