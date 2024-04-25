import FilaCicular from "../FilaCircular";

class GerenciarCaminhoes{

    constructor(qtdCaminhoes=11){
        this.filaCaminhoes = new FilaCicular(qtdCaminhoes);
        this.qtdCaminhoes = qtdCaminhoes;
        this.caminhoes = 0;
    }

    chegadaCaminhoneiro(id){
        if(!this.filaCaminhoes.isFull() && this.caminhoes < this.qtdCaminhoes-1){
            this.filaCaminhoes.enqueue(id);
            this.caminhoes++;
            return "Caminhoneiro esperando";
        }else if(this.caminhoes === this.qtdCaminhoes-1){
            return "Limite de caminhoes diarios atingido";
        }

        return "Fila cheia";
    }

    atenderCaminhao(){
        if(!this.filaCaminhoes.isEmpty()){
            this.filaCaminhoes.dequeue();
            return "Caminhao atendido";
        }

        return "Nao existem caminhoes para serem atendidos";
    }

    verificarProximo(){
        if(!this.filaCaminhoes.isEmpty()){
            return this.filaCaminhoes.front();
        }

        return "Fila vazia";
    }

    qtdAtingida(){
        return this.filaCaminhoes.length() === this.qtdCaminhoes-1;
    }

    listarCamAguardo(){
        return this.filaCaminhoes.toString();
    }
}

export default GerenciarCaminhoes;