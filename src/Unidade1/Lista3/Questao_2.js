import Lista from "../Lista";

class FilaLista{
    constructor(){
        this.fila = new Lista();
    }

    isEmpty(){
        return this.fila.isEmpty();
    }

    enqueue(dado){
        this.fila.add(dado);
    }

    dequeue(){
        if(!this.isEmpty()){
            this.fila.removeLast();
            return;
        }

        throw new Error("Queueunderflow");
    }

    front(){
        if(!this.isEmpty()){
            return this.fila.asArray()[this.fila.length()-1];
        }
    }

    clear(){
        while(!this.isEmpty()){
            this.fila.removeLast();
        }
    }

    length(){
        return this.fila.length();
    }

    toString(){
        let texto="";
        let lista = this.fila.asArray();

        for(let i=this.fila.length()-1; i >= 0;i--){
            console.log(lista[i]);
            texto += lista[i] + " ";
        }

        return texto;
    }
}

export default FilaLista;