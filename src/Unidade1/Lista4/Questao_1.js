import NoHeap from "../NoHeap";

class Heap{

    constructor(){
        this.three = []
        this.size = 0;
        this.three[0] = new NoHeap(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }

    isEmpty(){
        return this.size === 0;
    }

    getFather(){
        if(!this.isEmpty())
            return this.three[1].dado;
    }

    insert(dado, prioridade){
        this.three[++this.size] = new NoHeap(dado, prioridade);

        let indiceFilho = this.size;
        let indicePai = parseInt(indiceFilho/2);

        while(this.three[indiceFilho].prioridade < this.three[indicePai].prioridade){
            let troca = this.three[indicePai];
            this.three[indicePai] = this.three[indiceFilho];
            this.three[indiceFilho] = troca;

            indiceFilho = indicePai;
            indicePai = parseInt(indiceFilho/2);
        }
    }

    remove(){
        let removido = this.three[1];
        this.three[1] = this.three[this.size--];
        let indicePai = 1;
        let indiceFilhoEsq;
        let indiceFilhoDir;
        let indiceCompara;
        let troca;

        do{
            
            indiceFilhoEsq = indicePai*2;
            indiceFilhoDir = (indicePai*2)+1;
            if(indiceFilhoEsq <= this.size  && this.three[indiceFilhoEsq].prioridade < this.three[indiceFilhoDir].prioridade){
                indiceCompara = indiceFilhoEsq;
            }else if(indiceFilhoDir <= this.size  && this.three[indiceFilhoDir].prioridade < this.three[indiceFilhoEsq].prioridade){
                indiceCompara = indiceFilhoDir;
            }
            
            if(indiceCompara <= this.size && this.three[indiceCompara].prioridade < this.three[indicePai].prioridade){
                troca = this.three[indicePai];
                this.three[indicePai] = this.three[indiceCompara];
                this.three[indiceCompara] = troca;
            }
            
            indicePai = indiceCompara;
            
        }while(indiceFilhoEsq <= this.size && indiceFilhoDir <= this.size);
     
        return removido.dado;
    }
}

export default Heap;