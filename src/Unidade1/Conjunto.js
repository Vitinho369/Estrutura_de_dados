import ListaDuplamenteEncadeada from "./ListaDuplamenteEncadeada";

class Conjunto{
    constructor(){
        this.dados = new ListaDuplamenteEncadeada();
    }

    has(dado){
        return this.dados.search(dado);
    }
    
    add(dado){
        if(!this.has(dado))
            this.dados.add(dado);
    }
    
    delete(dado){
        if(this.has(dado))
            this.dados.remove(dado);
    }

    clear(){
        this.dados.clear();
    }

    values(){
        return this.dados.asArray();
    }

    length(){
        return this.dados.length();
    }

    intersection(B){
       let intersection = new Conjunto();

        for(let i of B.values()){
            if(this.has(i))
                intersection.add(i);
        }

       return intersection;
    }

    union(B){
        let union = new Conjunto();

        for(let i of this.values()){
            union.add(i)
        }

        for(let i of B.values()){
            union.add(i)
        }
        
        return union;
    }

    difference(B){
        let difference = new Conjunto();

        for(let i of this.values()){
            if(!B.has(i))
                difference.add(i);
        }

        return difference;
    }

    contains(B){
        
        for(let i of B.values()){
            if(!this.has(i))
                return false;
        }

        return true;
    }

    isEqual(B){
        return this.contains(B) && B.contains(this);
    }
}

export default Conjunto;