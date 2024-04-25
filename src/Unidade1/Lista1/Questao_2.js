class PilhaAB{

    constructor(tam=8){
        this.dados = [];
        this.tam = tam;
        this.topoA = 0;
        this.topoB = 0;
    }

    pilhaCheia(){
        return this.topoA + this.topoB === this.tam;
    }

    eVaziaA(){
        return this.topoA === 0;
    }

    eVaziaB(){
        return this.topoB === 0;
    }

    empilhaA(dado){
        if(!this.pilhaCheia()){
            this.topoA++;

            for(let i=this.topoA; i > 0; i--)
                this.dados[i] = this.dados[i-1];

            this.dados[0] = dado;
            return;
        }

        throw new Error("Stackoverflow");
    }

    empilhaB(dado){
        if(!this.pilhaCheia()){
            
            for(let i=this.topoB; i > 0; i--){
                this.dados[(this.tam-1)-i] = this.dados[((this.tam-1)-i+1)];
            }
            
            this.dados[this.tam-1] = dado;
            this.topoB++;
            return;
        }

        throw new Error("Stackoverflow");
    }

    desempilhaA(){
        if(!this.eVaziaA()){
            for(let i=0; i < this.topoA; i++)
                this.dados[i] = this.dados[i+1];
            
            this.dados[this.topoA-1] = undefined;
            this.topoA--;
            return;
        }

        throw new Error("StackunderflowA");
    }

    desempilhaB(){
        if(!this.eVaziaB()){
            for(let i=0; i < this.topoB; i++)
                this.dados[(this.tam-1)-i] = this.dados[((this.tam-2)-i)];
            
            this.dados[this.tam-this.topoB] = undefined;
            this.topoB--;
            return;
        }
        
        throw new Error("StackunderflowB");
    }

    top(){
        return this.dados[this.topoA-1];
    }
    
    size(){
        return this.topoA+this.topoB;
    }

    clear(){
        this.topoA=0;
        this.topoB=0;
    }

    toString(){
        let texto="";
        for(let i =0; i < this.tam;i++){
            texto += this.dados[i] + "\n";
        }

        console.log(texto)
    }
}

let pilhaAB = new PilhaAB();

pilhaAB.empilhaA("4");
pilhaAB.empilhaA("5");
pilhaAB.empilhaA("9");
pilhaAB.desempilhaA();
pilhaAB.empilhaB("12");
pilhaAB.empilhaB("11");
pilhaAB.empilhaB("10");
pilhaAB.empilhaB("9");
pilhaAB.empilhaB("8");
pilhaAB.empilhaB("7");
pilhaAB.toString();
pilhaAB.desempilhaB();
pilhaAB.desempilhaB();
pilhaAB.desempilhaB();
pilhaAB.toString();