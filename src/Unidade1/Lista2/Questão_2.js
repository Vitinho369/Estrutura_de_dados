import Pilha from "../Pilha";

class FilaPilha{

    constructor(capacidade=5){
        this.capacidade = capacidade;
        this.pilhaA = new Pilha(capacidade);
        this.pilhaB = new Pilha(capacidade);
    }

    isEmpty(){
        return this.pilhaA.size() >= this.pilhaB.size() ? this.pilhaA.isEmpty() : this.pilhaB.isEmpty();
    }

    isFull(){
        return this.pilhaA.size() >= this.pilhaB.size() ? this.pilhaA.isFull() : this.pilhaB.isFull();
    }

    enqueue(dado){
        if(!this.isFull()){
            if(this.pilhaA.size() >= this.pilhaB.size()){
                this.pilhaA.push(dado);
            }else{
                this.pilhaB.push(dado);
            }
            return;
        }

        throw new Error("Queueoverflow");
    }

    dequeue(){
        if(!this.isEmpty()){
            if(this.pilhaA.size() >= this.pilhaB.size()){
                let tam = this.pilhaA.size()-1;

                for(let i=0; i < tam;i++){
                    this.pilhaB.push(this.pilhaA.top());
                    this.pilhaA.pop();
                }
                this.pilhaA.pop()
            }else{
                let tam = this.pilhaB.size()-1;

                for(let i=0; i < tam;i++){
                    this.pilhaA.push(this.pilhaB.top());
                    this.pilhaB.pop();
                }
                this.pilhaB.pop()
            }
            return;
        }

        throw new Error("Queueunderflow");
    }

    front(){    
        let front;
        if(this.pilhaA.size() >= this.pilhaB.size()){
            let tam = this.pilhaA.size();

            for(let i=0; i < tam;i++){
                front = this.pilhaA.top();
                this.pilhaB.push(front);
                this.pilhaA.pop();
            }

            for(let i=0; i < tam;i++){
                this.pilhaA.push(this.pilhaB.top());
                this.pilhaB.pop();
            }
        }else{
            let tam = this.pilhaB.size();

            for(let i=0; i < tam;i++){
                front = this.pilhaB.top();
                this.pilhaA.push(front);
                this.pilhaB.pop();
            }

            for(let i=0; i < tam;i++){
                this.pilhaB.push(this.pilhaA.top());
                this.pilhaA.pop();
            }
        }
        return front;
    }

    toString(){

    }

    clear(){
        if(this.pilhaA.size() >= this.pilhaB.size()){
            this.pilhaA.clear();
        }else{
            this.pilhaB.clear();
        }
    }

    length(){
        return this.pilhaA.size() >= this.pilhaB.size() ? this.pilhaA.size() : this.pilhaB.size();
    }
}

export default FilaPilha;