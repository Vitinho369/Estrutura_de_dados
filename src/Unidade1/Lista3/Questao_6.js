import Lista from "../Lista";

class ListaString extends Lista{

    substring(indiceA, indiceB){
        let aux = this.cabeca;
        let count=0;
        let novaLista = new Lista();

        while(count <= indiceA){
            aux = aux.proximo;
            count++;
        }

        novaLista.append(aux.dado);
        while(count <= indiceB){
            aux = aux.proximo;
            novaLista.append(aux.dado);
            count++;
        }

        return novaLista;
    }
}

export default ListaString;